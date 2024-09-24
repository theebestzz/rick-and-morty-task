"use client";

import Image from "next/image";
import { Filter } from "./filter";
import { CardProps } from "@/types";

export function Card({ characters, status, gender }: CardProps) {
  return (
    <div className="flex flex-col items-center justify-center space-y-10 my-5">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
        Rick and Morty Characters
      </h1>
      <Filter status={status} gender={gender} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {characters.length > 0 ? (
          characters.map((character) => (
            <div key={character.id} className="space-y-3">
              <Image
                src={character.image}
                alt={character.name}
                title={character.name}
                className="w-full rounded"
                width={500}
                height={500}
              />
              <div>
                <h2 className="text-2xl font-semibold">{character.name}</h2>
                <p className="text-lg">Status: {character.status}</p>
                <p className="text-lg">Gender: {character.gender}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No characters found</p>
        )}
      </div>
    </div>
  );
}
