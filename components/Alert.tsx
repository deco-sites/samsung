import { useId } from "preact/hooks";

import Slider from "../islands/Slider.tsx";
import Icon from "$components/ui/Icon.tsx";


export interface Props {
  alerts: {text: string; link: string}[];
}

function Alert({ alerts }: Props) {
  const id = useId();

  return (
    <>
      <section
        id={id}
        class="hidden md:flex flex-row w-full justify-between h-10 bg-[black] h-[56px] px-6"
      >
        <a href="https://www.samsung.com/br/offer/#" class="text-white flex items-center">
          <span class="font-bold">Vantagens da Loja Oficial Samsung.com</span>
        </a>
        <div class="flex gap-10 items-center justify-between text-sm text-white">
          {
            alerts.map(alert => {
              return(
                <a href={alert.link} class="flex items-center gap-2">
                  {alert.text} 
                  <Icon id="ArrowAlert" className="w-[15px] h-[15px]" />
                </a>
              )
            })
          }
        </div>
      </section>
      <Slider id={id} items={alerts.length} delay={4000} />
    </>
  );
}

export default Alert;
