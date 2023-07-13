import { toSlug } from "@/utils";
import Img1 from "../../public/images/blogpage/1.jpg";
import Img2 from "../../public/images/blogpage/2.jpg";
import Img3 from "../../public/images/blogpage/3.jpg";
import Img4 from "../../public/images/blogpage/4.jpg";
import Img5 from "../../public/images/blogpage/5.jpg";

const fakeBlog = [
  {
    image: Img1,
    id: 1,
    title: "5 de los mejores ejercicios para hacer en casa",
    date: "2023-07-13",
    content:
      "Descubre cinco ejercicios altamente efectivos que puedes hacer en la comodidad de tu hogar para mantenerte en forma y saludable. Obtén instrucciones detalladas sobre cómo realizar cada ejercicio correctamente y disfruta de los beneficios de entrenar sin necesidad de ir al gimnasio.",
    description:
      "Descubre cinco ejercicios altamente efectivos que puedes hacer en casa para mantenerte en forma y saludable.",
  },
  {
    image: Img2,
    id: 2,
    title: "Consejos para una alimentación saludable y balanceada",
    date: "2023-06-10",
    content:
      "Aprende cómo llevar una alimentación saludable y balanceada que complemente tu estilo de vida fitness. Obtén consejos sobre qué alimentos incluir en tu dieta, cómo planificar tus comidas y cómo mantener un equilibrio adecuado de nutrientes para optimizar tu rendimiento físico.",
    description:
      "Aprende cómo llevar una alimentación saludable y balanceada que complemente tu estilo de vida fitness.",
  },
  {
    image: Img3,
    id: 3,
    title: "Los beneficios del entrenamiento de fuerza para tu salud",
    date: "2023-07-13",
    content:
      "Descubre los numerosos beneficios del entrenamiento de fuerza para tu salud física y mental. Aprende cómo el levantamiento de pesas y otros ejercicios de resistencia pueden mejorar tu fuerza muscular, aumentar tu metabolismo y promover una mejor salud ósea.",
    description:
      "Descubre los numerosos beneficios del entrenamiento de fuerza para tu salud física y mental.",
  },
  {
    image: Img4,
    id: 4,
    title: "Cómo mantener la motivación en tu rutina de ejercicio",
    date: "2023-07-13",
    content:
      "Aprende estrategias efectivas para mantener la motivación y superar los obstáculos en tu camino hacia una vida fitness. Descubre técnicas de establecimiento de metas, seguimiento del progreso y recompensas para mantener un enfoque constante en tu rutina de ejercicio.",
    description:
      "Aprende estrategias efectivas para mantener la motivación en tu rutina de ejercicio.",
  },
  {
    image: Img5,
    id: 5,
    title:
      "Los mejores alimentos para la recuperación después del entrenamiento",
    date: "2023-07-13",
    content:
      "Descubre qué alimentos son ideales para la recuperación muscular y la rehidratación después del ejercicio intenso. Obtén información sobre las propiedades nutritivas de alimentos como batidos de proteínas, frutas y alimentos ricos en nutrientes para ayudar a tu cuerpo a recuperarse y repararse después del entrenamiento.",
    description:
      "Descubre qué alimentos son ideales para la recuperación después del entrenamiento y cómo pueden ayudar a tu cuerpo a recuperarse y repararse.",
  },
];

const formatFakeBlog = fakeBlog.map((blog) => {
  return {
    ...blog,
    slug: toSlug(blog.title),
  };
});

export { formatFakeBlog };
