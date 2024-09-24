import { FilterProps } from "@/types";

export function Filter({ status, gender }: FilterProps) {
  return (
    <form className="flex flex-col items-center justify-center space-y-5">
      <div>
        <label htmlFor="status">Status: </label>
        <select id="status" name="status" defaultValue={status}>
          <option value="">All</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>

        <label htmlFor="gender">Gender: </label>
        <select id="gender" name="gender" defaultValue={gender}>
          <option value="">All</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>

      <button
        type="submit"
        className="bg-cyan-600 rounded px-2 py-1 text-white w-full"
      >
        Filter
      </button>
    </form>
  );
}
