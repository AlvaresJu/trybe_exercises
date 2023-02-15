"""
Exercício 3:
Dado um arquivo contendo estudantes e suas respectivas notas,
 escreva um programa que:
1. lê todas essas informações;
2. aplique um filtro, mantendo somente as pessoas que estão reprovadas;
3. escreva seus nomes em outro arquivo.
Obs.: Considere que a nota miníma para aprovação é 6.
"""
with open("data_files/ex3_in_practice.txt", "r") as file:
    approved_list = [
        line.split()[0] + "\n" for line in file if int(line.split()[1]) < 6
    ]


with open("data_files/ex3_approved_result.txt", "w") as result_file:
    result_file.writelines(approved_list)
