export interface DataInterface {
  id: number;
  name: string;
  data: Record<string, unknown>
}

export const people: DataInterface[] = [
  {
    "id": 1,
    "name": "aaaa",
    "data": {
      "test1": "value1"
    }
  },
  {
    "id": 2,
    "name": "bbbb",
    "data": {
      "test3": "value5"
    }
  },
  {
    "id": 3,
    "name": "cccc",
    "data": {
      "test4": "value7",
      "test3": "value9",
      "test10": "value10"
    }
  }
]

