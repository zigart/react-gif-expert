import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("Pruebas en <GifGrid />", () => {
  const category = "One Punch";
  test("Debe mostrar el titulo ", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);
    expect(screen.getByText(category).innerHTML).toBe(category);
  });

  test("Debe mostrar el loader inicialmente ", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });
    render(<GifGrid category={category} />);
    expect(screen.getByText("Cargando...")).toBeTruthy();
    expect(screen.getByText(category)).toBeTruthy();
  });
  test("Debe mostrar las tarjetas ", () => {
    const gifs = [
      { id: "ABC", title: "Saitama", url: "https://localhost/saitama.jpg" },
      { id: "ABC", title: "GOKU", url: "https://localhost/goku.jpg" },
    ];
    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });
    render(<GifGrid category={category} />);
    expect(screen.getAllByRole('img').length).toBe(2);
  });
});
