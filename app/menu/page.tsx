import { ChevronRightIcon } from '@radix-ui/react-icons';

export default function Menu() {
  return (
    <main id="menu">
      <Section title="Base" items={['Pita', 'Bowl and Pita', 'Bowl']} />
      <Section title="Hummus" items={['Hummus Classi', 'Garlic Hummus']} />
      <Section title="Extras" items={['Falafel', 'Spices', 'Skhoog', 'Garbanzos', 'Extra Pitas']} />
    </main>
  );
}

function Section({ title, items }: any) {
  return (
    <section>
      <h1>{title}</h1>
      <div id="items">
        {items.map((item: any) => (
          <div id="item">
            <ChevronRightIcon scale="300%" />
            <p>{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
