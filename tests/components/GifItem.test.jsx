import { AddCategory, GifItem } from "../../src/components";
import { render, screen } from "@testing-library/react";

describe("Pruebas del componente <GifItem />", () => {
  const title = "Dragon Ball";
  const url = "https://dragonball.gif/";
  test("El render coincide con el snapshot ", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });
  test("Debe mostrar la imagen con la URL y el ALT indicado", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    const { src, alt } = screen.getByRole("img");

    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test("Debe mostrar el titulo en el componente", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
