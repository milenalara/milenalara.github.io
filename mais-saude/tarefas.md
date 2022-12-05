# Tarefas

## Páginas

### index.html
- (Octávio) fazer seção "Meu bem-estar" acima dos cards OK
	- mostra dados salvos no objeto "sintomas" (ultimos 7 dias)
		- febre
		- dores etc
	- mostra dados salvos no objeto "bemEstar"

- "FUTURO" (mencionar intenção para professores mas ressaltar que página é estática por enquanto)
  - acrescentar card "Meus hábitos" (será onde futuramente colocaríamos campos para preencher dados sobre hábitos de exercícios físicos, tabagismo, água etc)
  - acrescentar card "Meu histórico" (futuramente histórico de doenças familiares, internações, cirurgias, fraturas etc)

### cadastro-consulta.html
(Milena)
- imagens não estão aparecendo
- está quebrando o select

### consultas.html
- (Milena): readaptar página para novo json

### cadastro-medicacao.html
(Mt)
- ajustar layout para os inputs ficarem do mesmo tamanho

### medicacoes.html
(Mt)
- refazer

### cadastro-medico.html
(Milena)
- renderizar antes do botão de enviar

### medicos.html
(Matheus)
- usar local storage para puxar os dados
- colocar só 2 médicos puxando de uma lista estática

### exames.html
(Mt)
- está quebrando depois que salva o arquivo

### tela-inicial.html
- Ficou perfeita

### registrar.html
(Lucas)
- Está quebrando quando clica no botão > redirecionar para tela de sintomas.html

### teladefebre.html
(Octávio)
- renomear: febre.html OK
- linkado o css proprio = estilo global OK
- CSS e imagens não estão aparecendo OK

### meu_perfil.html
(Lucas)
- renomear: meu-perfil.html
- header e footer perderam estilização

## sintomas.html ("o que está sentindo")
(Octávio)
- linkar css proprio + estilo global OK
- relinkar as imagens usando href ./img/nomearquivo.png e não usar espaço nos nomes dos arquivos OK
- linkei com febre, dor cabeça e dor no corpo OK

# dorcabeca.html
- (Mt) refazer - referência: teladefebre.html dores-corpo.html

## Vídeo
Octávio

## Slides
Pedro

## Documentação
(Octávio)
- tem que ver o que está faltando
- corrigir o que a Simone deu de feedback na sprint 1 (está na tarefa). Erros apresentados pela avaliação:
1) Problema com informações básicas, porém com ausência de referências de pesquisas;
2) Justificativa apresentada, porém com argumentos falhos ou sem uma fonte confiável para as argumentações apresentadas;
3) Protótipo interativo não entregue (falta o link);
4) O texto é simples e claro, porém sem a inclusão de referências que sustentam as afirmações ou com pouca conexão das ideias apresentadas;
5) O texto é básico apresentando os aspectos relevantes sem entrar em detalhes, sem citar exemplos e fontes confiáveis;
6) Não foram indicadas informações da entrevista;
7) Não foram indicadas fontes que mostrem a necessidade do sistema;
8


## CITATION.cff
(Lucas)
- Ver tutorial
- Preencher

------- versão antiga
URGENTE!!!!
- Disponibilizar os códigos (se estiver pronto dar MERGE, senão, fazer commit da branch)
- Deletar card MEU BEM-ESTAR da home

CADASTRO MÉDICO
- Lucas
HISTÓRICO MÉDICOS
- Matheus

CADASTRO MEDICAÇÃO
- Marco Túlio
HISTÓRICO DE MEDICAÇÃO
- Pedro


Login
	Como está hoje
		SE OK -> Home
		SENÃO -> Sintomas -> (dor de cabeça, febre, dor no corpo, outro -> HOME)

HOME
	DADOS DA SAÚDE
		MEDICAÇÕES EM USO
		PRÓXIMAS CONSULTAS
		TABELAS:
		atividadeFisica, // sim ou não
  		cigarro, // sim ou não
  		agua, // quantos litros
  		sono // quantas horas
		
	CARDS
		MEDICAÇÕES: Adicionar <-> Histórico (uma tem que ter possibilidade de acesso a outra)
		MÉDICOS: Adicionar <-> Histórico 		
		CONSULTAS: Adicionar <-> Histórico 
		EXAMES (estática): Adicionar <-> Histórico