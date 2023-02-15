"""
Exercício 2:
Escreva um programa que receba vários números naturais
 e calcule a soma desses valores.
 Caso algum valor da entrada seja inválido (por exemplo uma letra),
 uma mensagem deve ser exibida na saída de erros no seguinte formato:
 “Erro ao somar valores, {valor} é um valor inválido”.
 Ao final, você deve imprimir a soma dos valores válidos.
"""

str_input = input(
    'Entre com valores a serem somados, separados por um espaço '
)
str_number_list = str_input.split()

sum = 0
for value in str_number_list:
    if value.isdigit():
        sum += int(value)
    else:
        print(f"Erro ao somar valores, {value} é um valor inválido")

print(f"Soma de valores válidos = {sum}")
