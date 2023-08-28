"use client";

import { useStoreTestimonials } from "@/store/storeTestimonial";
import React from "react";
import TestimonialBox from "./TestimonialBox";

function TestimonialBoxes() {
  const testimonials = useStoreTestimonials(
    (state: { testimonials: any[] }) => state.testimonials
  );
  const indexTestimonial = useStoreTestimonials(
    (state: { indexTestimonial: number }) => state.indexTestimonial
  );
  const TestimonialsContain = () => {
    return (
      <>
        <TestimonialBox testimonial={testimonials[indexTestimonial]} />
      </>
    );
  };

  return <>{TestimonialsContain()}</>;
}

export default TestimonialBoxes;
