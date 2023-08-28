import { create } from "zustand";

export interface StoreTestimonials {
  testimonials: any;
  indexTestimonial: number;
  lengthTestimonials: () => number;
  nextTestimonial: () => void;
  previewTestimonial: () => void;
}

export const useStoreTestimonials = create<StoreTestimonials>((set, get) => ({
  testimonials: [
    {
      text: "He sido miembro de PeltrocheGym durante los últimos 6 meses y ha sido una experiencia increíble. Los capacitadores están bien informados y brindan apoyo, el equipo es de primera categoría y la comunidad de miembros es amigable y alentadora.",
      name: "Luisa ",
      job: "Fitness Coach",
      id: "1",
    },
    {
      text: "Me encanta ser parte de PeltrocheGym. La tranquilidad del estudio y la guía de los instructores han mejorado mi práctica enormemente. Cada clase es una oportunidad para crecer.",
      name: "Elena",
      job: "Yoga Instructor",
      id: "2",
    },
    {
      text: "como parte de  PeltrocheGym, he descubierto el mundo fitness y  en peltroche encontre un lugar agradable que me ayudo a mejorar como persona",
      name: "Sophie Rodriguez",
      job: "Visual Artist",
      id: "3",
    },
  ],
  indexTestimonial: 0,
  lengthTestimonials: () => get().testimonials.length,
  nextTestimonial: async () => {
    const lastIndex = get().lengthTestimonials() - 1;
    await set((state: StoreTestimonials) => ({
      indexTestimonial:
        get().indexTestimonial == lastIndex ? 0 : state.indexTestimonial + 1,
    }));
    console.log();
  },
  previewTestimonial: async () => {
    const lastIndex = get().lengthTestimonials() - 1;
    await set((state: StoreTestimonials) => ({
      indexTestimonial:
        state.indexTestimonial == 0 ? lastIndex : state.indexTestimonial - 1,
    }));
  },
}));
