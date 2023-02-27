import type { Product } from "$live/std/commerce/types.ts";

interface Props {
  product: Product;
}

interface variant{
  name?: string | undefined;
  value?: string | undefined;
}

interface attribute{
  variant: Array<variant>;
  url: string;
}

interface optionsToShow{
  variant: variant;
  url: string;
}

// Navigates the user the the choosen sku
const onChange = {
  onchange: "(function(e){  window.location.href = e.target.value; })(event)",
};

export default function SKUSelector(
  { product }: Props,
) {

  const selected = product.additionalProperty
  const attributes : Array<attribute> = []
  const optionsToShow : Array<optionsToShow> = []
  const allProperties : Array<string | undefined> = []
  let currentProductAlreadyAdded = false

  const currentUrl = product.url
  
  product.isVariantOf?.hasVariant.map(variant => {

    let isVariantOptionToShow = false
    
    variant.additionalProperty?.forEach(property => {
      const name = property.name
      const value = property.value

      selected?.forEach(selectedProperty =>{
        const nameSelected = selectedProperty.name
        const valueSelected = selectedProperty.value

        if(nameSelected == name && valueSelected == value){
          isVariantOptionToShow = true
        }
      })

      if(!allProperties.includes(name)){
        allProperties.push(name)
      }
    })

    if(isVariantOptionToShow){
      attributes.push({variant: variant.additionalProperty!, "url": variant.url!})
    }

  })

  selected?.forEach(selected => {

    attributes?.forEach(attribute => {
      let isAnOption

      attribute.variant.forEach((variant) => {
        if(selected.name == variant.name && selected.value == variant.value){
          isAnOption = true
        }
      })

      attribute.variant.forEach((variant) => {
        if(selected.name == variant.name && selected.value != variant.value){
          optionsToShow.push({'variant': variant, 'url': attribute.url })
        }
      })

      if(attribute.url == currentUrl && currentProductAlreadyAdded ==  false){
        attribute.variant.forEach((variant ) => {
          optionsToShow.push({'variant': variant, 'url': attribute.url })
        })
  
        currentProductAlreadyAdded = true
      }

    });
  }) 

  return (
    <div class="flex flex-col justify-between py-2 gap-4">
      {
        allProperties?.map(property => {
          const filter = optionsToShow.filter(option => option.variant.name == property)
          if(filter.length > 0){
            return(
              <div class="flex flex-col gap-4">
                <label class="font-semibold text-[22px]">{property}</label>
                <div class="flex flex-wrap">
                  {
                    optionsToShow.map(option => {
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
          }
        })
      }
    </div>
  );
}
