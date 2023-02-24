import type { h } from "preact";
import Icon from "$components/ui/Icon.tsx";
import Alert from "$components/Alert.tsx"

import CartButton from "../islands/CartButton.tsx";
import CartModal from "../islands/CartModal.tsx";
import NewSearch from "../islands/NewSearch.tsx";

import type { NavItem as Item } from "$components/header/NavItem.ts";

const item: Item[] = [
  {
    label: "Tablets",
    href: "/mobile/tablet",
    children: [
      { label: "Polos", href: "/mobile/tablet" },
      { label: "Shorts", href: "/mobile/tablet" },
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

export interface NavProps{
  items: Item[];
}

function Navbar({items} : NavProps) {
  return (
    <>
      {/* Mobile Version */}
      <section class="md:hidden flex justify-between items-center p-2">

        <a href="/" class="block max-w-[10rem]">
          <img src="/logo.png" alt="Logo Samsung" />
        </a>
        <div class="flex justify-end">

        <NewSearch />

          <CartButton />

          <button
          aria-label="open menu"
          class="flex items-center justify-center h-12 w-12"
          >
            <Icon id="Bars3" className="w-8 h-8" />
          </button>
        </div>
      </section>

      {/* Desktop Version */}
      <section class="hidden md:flex bg-white flex-row h-[80px] items-center md:border-b border-[#d3d5db] mx-8">
        <a href="/" class="block min-w-[12rem] max-w-[14rem] p-3">
          <img src="/logo.png" alt="Logo Samsung" />
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
