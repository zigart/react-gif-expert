import { render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";
describe("Pruebas en <GifExpertApp />", () => {
  test("Debe mostrar el titulo", () => {
    render(<GifExpertApp  />);
    expect(screen.getByText('GifExpertApp').innerHTML).toBeTruthy();
  });
});
