export interface Produto {
  id: number;
  nome: string;
  preco: number;
  descricao: string;
  imagem: string;
  categoria: string;
  quantidade?: number;
}
