import type { h } from "preact";
import { Picture, Source } from "$live/std/ui/components/Picture.tsx";
import Icon from "$components/ui/Icon.tsx";
import Alert from "$components/Alert.tsx"

import CartButton from "../islands/CartButton.tsx";
import CartModal from "../islands/CartModal.tsx";
import NewSearch from "../islands/NewSearch.tsx";

import type { NavItem as Item } from "$components/header/NavItem.ts";


const item: Item[] = [
  {
    label: "Loja Online",
    href: "/mobile/tablet",
    children: [
      { label: "Comprar agora", href: "/m" },
      { label: "Programa de Ofertas", href: "/" },
    ],
  },
];

function NavItem(itemProps: Item) {
  return (
    <div class="relative overflow-hidden hover:overflow-visible">
      <a
        href={itemProps.href ?? `/search?ft=${itemProps.label}`}
        class="flex items-center font-bold px-1"
      >
        <span class="hover:bg-black hover:text-white px-2 py-1 text-[14px] rounded-[20px]">
          {itemProps.label}
        </span>
      </a>
      {
        itemProps.children && <div class="bg-white p-6 z-10 absolute flex gap-10 max-inline rounded-b-[16px]">
        {
          itemProps.children.map(child => {
            return (
              <div class="">
                <a href={child.href} class="font-bold text-[14px]">{child.label}</a>
                {
                  child.childrenOfChildren && <ul class="flex flex-col gap-2 mt-3">
                    {
                      child.childrenOfChildren.map(childOfChild => {
                        return(
                          <a href={childOfChild.href} class="text-[12px] hover:font-bold">{childOfChild.label}</a>
                        )
                      })
                    }
                  </ul>  
                }
              </div>
            )
          })
        }
      </div>
      }
      
    </div>
  );
}

function NavItemMobile(itemProps: Item) {
  return (
      <details>
        <summary class="flex justify-between items-center">
          <a
            href={itemProps.href ?? `/search?ft=${itemProps.label}`}
            class="flex items-center px-1"
          >
            <span class="px-2 py-3 text-[16px] ">
              {itemProps.label}
            </span>
          </a>
          {
            itemProps.children && <span id="marker" class="text-[20px] px-3">
              &gt;
            </span>
          }
        </summary>
        {
          itemProps.children && <div class="bg-white p-2 z-10 flex flex-col gap-2 max-inline rounded-b-[16px] w-auto min-w-full">
          {
            itemProps.children.map(child => {
              return (
                <details class="">
                  <summary class="flex justify-between items-center">
                    <a href={child.href} class=" text-[14px]">{child.label}</a>
                    {
                      child.childrenOfChildren && <span id="marker" class="text-[18px] px-3">
                        &gt;
                      </span>
                    }
                  </summary>
                  
                  {
                    child.childrenOfChildren && <ul class="flex flex-col gap-2 mt-3">
                      {
                        child.childrenOfChildren.map(childOfChild => {
                          return(
                            <a href={childOfChild.href} class="text-[12px] hover:font-bold">{childOfChild.label}</a>
                          )
                        })
                      }
                    </ul>  
                  }
                </details>
              )
            })
          }
        </div>
        }
      </details>
  );
}

export interface NavProps{
  items: Item[];
}

function Navbar({items} : NavProps) {
  return (
    <>
      {/* Mobile Version */}
      <section id="menu-mobile" class="md:hidden flex justify-between items-center p-2">

        <a href="/" class="block max-w-[10rem]">
          <img src="/logo.png" alt="Logo Samsung" />
          <Picture class="inset-0" preload>
              <Source
                src="/logo.png"
                width={120}
                height={32}
                fetchPriority="high"
              />
              <img
                class=""
                src="/logo.png"
                alt="Logo Samsung"
                loading="eager"
              />
            </Picture>
        </a>
        <div class="flex justify-end">

          <NewSearch />
          <CartButton />
          <details id="menu-hamburguer">
            <summary class="block">
              <div
              aria-label="open menu"
              class="flex items-center justify-center h-12 w-12"
              >
                <Icon id="Bars3" className="w-8 h-8" />
              </div>
            </summary>
            <div class="bg-white absolute top-0 right-0 z-50 w-full max-w-[360px] h-full p-4 top-[60px]">
              {items.map((item) => {
                return(
                  <NavItemMobile {...item} />
                )
              })}
            </div>
          </details>
          
        </div>
      </section>

      {/* Desktop Version */}
      <section class="hidden md:flex bg-white flex-row h-[80px] items-center md:border-b border-[#d3d5db] mx-8">
        <a href="/" class="block min-w-[12rem] max-w-[14rem] p-3">
          <Picture class="inset-0" preload>
              <Source
                src="/logo.png"
                width={120}
                height={32}
                fetchPriority="high"
              />
              <img
                class=""
                src="/logo.png"
                alt="Logo Samsung"
                loading="eager"
              />
          </Picture>
        </a>
        <div class="flex justify-center items-center md:justify-between h-14">
          {items.map((item) => {
            return(
              <NavItem {...item} />
            )
          })}
        </div>
        <div class="flex-1 flex items-center justify-end gap-6">
          <NewSearch />
          <CartButton />
        </div>
      </section>
    </>
  );
}

export interface Props {
  navItems?: Item[];
  alerts: {text: string; link: string}[];
}

function Header({navItems = item, alerts }: Props) {
  return (
    <header class="max-w-[1440px] m-auto">
      <Navbar items={navItems} />
      <CartModal />
      <Alert alerts={alerts}/>
    </header>
  );
}

export default Header;
