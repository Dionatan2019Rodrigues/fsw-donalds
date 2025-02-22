import Image from "next/image";
import { notFound } from "next/navigation";

import { getRestaurantBySlug } from "@/data/get-restaurant-by-slug";

import ConsumptionMethodOption from "./_components/consumption-method-option";

interface ChooseHomePageProps {
  params: Promise<{ slug: string }>;
}

const ChooseHomePage = async ({ params }: ChooseHomePageProps) => {
  const { slug } = await params;
  const restaurant = await getRestaurantBySlug(slug);
  if (!restaurant) {
    return notFound;
  }
  return (
    <div className="flex h-screen flex-col items-center justify-center p-6 pt-24">
      {/* LOGO E TÍTULO*/}
      <div className="flex flex-col items-center gap-2">
        <Image
          src={restaurant.avatarImageUrl}
          alt={restaurant.name}
          width={82}
          height={82}
        />
        <h2 className="font-bol">{restaurant.name}</h2>
      </div>
      {/* BEM VINDO*/}
      <div className="space-y-2 pt-24 text-center">
        <h3 className="text-2xl font-semibold">Seja Bem-Vindo!</h3>
        <p className="opacity-55">
          Escolha como prefere aproveitar sua refeição. Estamos oferecendo
          praticidade e sabor em cada detalhe!
        </p>
      </div>
      {/* MÉTODO DE CONSUMO*/}
      <div className="grid grid-cols-2 pt-14 gap-4">
      <ConsumptionMethodOption 
          option="DINE_IN"
          buttonText="Para comer aqui"
          imageUrl="/dine_in.png"
          imageAlt="para comer aqui"
        />
        <ConsumptionMethodOption 
          option="TAKEAWAY"
          buttonText="Para levar"
          imageUrl="/takeaway.png"
          imageAlt="para levar"
        />
      </div>
    </div>
  );
};

export default ChooseHomePage;
