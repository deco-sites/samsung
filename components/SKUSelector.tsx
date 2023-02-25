import type { Product } from "$live/std/commerce/types.ts";

interface Props {
  product: Product;
}

// Navigates the user the the choosen sku
const onChange = {
  onchange: "(function(e){  window.location.href = e.target.value; })(event)",
};

export default function SKUSelector(
  { product }: Props,
) {

  let selected = product.additionalProperty
  const attributes : any[] = []
  let options : any[] = []
  let allProperties : any[] = []
  let currentAlreadyAdded = false

  const currentUrl = product.url
  
  product.isVariantOf?.hasVariant.map(variant => {

    let variantOption = false
    
    variant.additionalProperty?.forEach(property => {
      let name = property.name
      let value = property.value

      selected?.forEach(selectedProperty =>{
        let nameSelected = selectedProperty.name
        let valueSelected = selectedProperty.value

        if(nameSelected == name && valueSelected == value){
          variantOption = true
        }
      })

      if(!allProperties.includes(name)){
        allProperties.push(name)
      }
    })

    if(variantOption){
      attributes.push({variant: variant.additionalProperty!, "url": variant.url!})
    }

  })

  selected?.forEach(selected => {
    console.log(selected.name)

    attributes?.forEach(attribute => {
      let isAnOption

      attribute.variant.forEach((variant: { name: string|undefined; value: string|undefined; }) => {
        if(selected.name == variant.name && selected.value == variant.value){
          isAnOption = true
        }
      })

      attribute.variant.forEach((variant: { name: string|undefined; value: string|undefined; }) => {
        if(selected.name == variant.name && selected.value != variant.value){
          options.push({'variant': variant, 'url': attribute.url })
        }
      })

      if(attribute.url == currentUrl && currentAlreadyAdded ==  false){
        attribute.variant.forEach((variant : any) => {
          options.push({'variant': variant, 'url': attribute.url })
        })
  
        currentAlreadyAdded = true
      }

    });
  }) 

  console.log(options)


  return (
    <div class="flex flex-col justify-between py-2">
      {
        allProperties?.map(property => {
          return(
            <div class="flex flex-col gap-4">
              <label class="font-semibold text-[22px]">{property}</label>
              <div class="flex flex-wrap">
                {
                  options.map(option => {
                    const url = option.url
                    if(option.variant.name == property){
                      return(
                        <a key={url} class={`block w-[40%] p-4 text-[14px] rounded-[6px] m-2.5 ${url == currentUrl ? "border-2 border-blue-500" : "shadow-inset"}`} href={url} selected={url === currentUrl}>
                          {option.variant.value}
                        </a>
                      )
                    }
                  })
                }
              </div>
            </div>
          )
        })
      }
    </div>
  );
}
