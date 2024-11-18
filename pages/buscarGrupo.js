import { supabase } from './supabaseClient';

export async function fetchGroups() {
  try {
    const { data, error } = await supabase
      .from('Grupos')
      .select(`
        id_grupo,
        nome_grupo,
        tema,
        alunos_grupos (
          Aluno ( nome )
        ),
        informacoes
      `);

    if (error) throw error;

    console.log('Dados retornados:', data);
    return data;
  } catch (error) {
    console.error('Erro ao buscar grupos:', error.message);
    return [];
  }
}
