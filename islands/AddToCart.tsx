import { useSignal } from "@preact/signals";
import Button from "$components/ui/Button.tsx";

import { useCart } from "../sdk/cart/useCart.ts";
import { useUI } from "../sdk/useUI.ts";

interface Props {
  skuId: string;
  sellerId: string;
  class?: string;
  large?: boolean;
}

export default function AddToCart({ skuId, sellerId, large }: Props) {
  const isAddingToCart = useSignal(false);
  const { displayCart } = useUI();
  const { addItems, loading } = useCart();

  const onAddItem = async () => {
    try {
      isAddingToCart.value = true;
      await addItems({
        orderItems: [{ id: skuId, seller: sellerId, quantity: 1 }],
      });

      displayCart.value = true;
    } finally {
      isAddingToCart.value = false;
    }
  };

  return (
    <Button
      class='bg-black px-[30px] py-2.5'
      onClick={onAddItem}
      loading={false}
      disabled={loading.value}
    >
      Comprar Agora
    </Button>
  );
}
