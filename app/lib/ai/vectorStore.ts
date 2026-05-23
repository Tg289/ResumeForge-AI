// app/lib/ai/vectorStore.ts

export async function storeEmbedding(id: string, embedding: number[]) {
  await fetch("/api/vector/store", {
    method: "POST",
    body: JSON.stringify({ id, embedding }),
  });
}

export async function searchSimilar(embedding: number[]) {
  const res = await fetch("/api/vector/search", {
    method: "POST",
    body: JSON.stringify({ embedding }),
  });

  return res.json();
}