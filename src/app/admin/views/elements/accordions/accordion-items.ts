import { AccordionContent } from "src/app/shared/components/accordion/accordion-types";

export const accordionItems: AccordionContent[] = [
  {
    id: 1,
    Title: 'What is NgWind?',
    Contents:
      'NgWind is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more',
  },
  {
    id: 2,
    Title: 'Accordion with another icon?',
    Contents:
      'To enable nested accordions you need to wrap the nested accordion in an element with the data-accordion attribute and don’t accidentally initialize an accordion ',
  },
  {
    id: 3,
    Title: 'Can I use both?',
    Contents:
      'e actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds',
  },
];