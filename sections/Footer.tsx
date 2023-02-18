import { FooterAccordion, FooterAccordionMobile } from "../components/FooterAccordion.tsx";
import Icon from "../components/ui/Icon.tsx";

export default function Footer() {
  return (
    <footer class="w-full max-w-[1440px] m-auto">

      <div class="hidden md:block w-full">
        <FooterAccordion />
      </div>

      <div class="block md:hidden w-full">
        <FooterAccordionMobile />
      </div>

      <div class="px-3 py-[17px] text-[12px] border-b-1 border-[#ccc]">
        <p>Copyright© 1995-2023 SAMSUNG. Todos os direitos reservados.</p>
        <p>SAMSUNG ELETRÔNICA DA AMAZÔNIA LTDA., com sede em Av. dos Oitis, nº 1.460, Distrito Industrial, Manaus/AM, 69.007-002, inscrita no CNPJ/MF sob o nº. 00.280.273/0001-37.</p>
        <p class="mt-2">Esse website é melhor visualizado nas versões Microsoft Internet Explorer 11 ou superior e/ou nas últimas versões dos navegadores Google Chrome e Mozilla Firefox.</p>
      </div>

      <div className="flex flex-row flex-col justify-between justify-center items-center px-3 pt-2 pb-5 w-full">
        <div class="flex flex-col-reverse md:flex-row justify-between items-center w-full text-[12px]">
          <ul class="flex items-center justify-center mt-3 flex-wrap">
            <li class="font-bold pr-3">
              <a href="#">
                Brasil/Português
              </a>
            </li>
            <div class="w-[1px] h-[20px] bg-[#ccc] mx-3"></div>
            <li class="px-3">
              <a href="#">
                Termos & Condições Loja Online
              </a>
            </li>
            <li class="px-3">
              <a href="#">
                Privacidade
              </a>
            </li>
            <li class="px-3">
              <a href="#">
                Cookies
              </a>
            </li>
            <li class="px-3">
              <a href="#">
                Legal
              </a>
            </li>
            <li class="px-3">
              <a href="#">
                Mapa do site
              </a>
            </li>
            <li class="px-3">
              <a href="#">
                Cibersegurança
              </a>
            </li>
          </ul>
          <ul class="flex items-center justify-center mt-3">
            <li class="mr-[8px] last:m-0">
              <a
                href="#"
                class="flex items-center justify-center w-8 h-8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon id="Facebook" class="w-auto" />
              </a>
            </li>
            <li class="mr-[8px] last:m-0">
              <a
                href="https://www.instagram.com/deco.cx"
                class="flex items-center justify-center w-8 h-8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon id="Instagram" class="w-auto" />
              </a>
            </li>
            <li class="mr-[8px] last:m-0">
              <a
                href="#"
                class="flex items-center justify-center w-8 h-8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon id="Tiktok" class="w-auto" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
