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
