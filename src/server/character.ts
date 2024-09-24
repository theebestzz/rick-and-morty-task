"use server";

import { Character } from "@/types";

export async function getCharacters(status: string, gender: string): Promise<Character[]> {
  const apiURL = `https://rickandmortyapi.com/api/character?status=${status}&gender=${gender}`;
  const response = await fetch(apiURL);
  const data = await response.json();
  return data.results || [];
}