import { getCharacters } from "@/server/character";
import { Card } from "@/components/card";
import { Character, FilterProps } from "@/types";

export default async function Home({
  searchParams,
}: {
  searchParams: FilterProps;
}) {
  const { status = "", gender = "" } = searchParams;

  const characters: Character[] = await getCharacters(status, gender);

  return <Card characters={characters} status={status} gender={gender} />;
}
