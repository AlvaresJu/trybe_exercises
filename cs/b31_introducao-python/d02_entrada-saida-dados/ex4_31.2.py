import json
import csv


def read_json_file(file_name):
    try:
        with open(file_name, "r") as json_file:
            books = json.load(json_file)
        return books

    except FileNotFoundError as exc:
        print(exc)

    except json.decoder.JSONDecodeError as exc:
        print(exc)


def set_categories_percentage(books):
    category_counter = dict()

    for book in books:
        for category in book["categories"]:
            if category not in category_counter:
                category_counter[category] = 1
            else:
                category_counter[category] += 1

    categories_percentage_list = [
        [category, (quantity / len(books))]
        for category, quantity in category_counter.items()
    ]
    return categories_percentage_list


def create_csv_categories_file(category_percentage_list):
    with open(
        "data_files/categories_books.csv", encoding="utf-8", mode="w"
    ) as csv_file:
        writer = csv.writer(csv_file)

        headers = ["categoria", "porcentagem"]
        writer.writerow(headers)
        writer.writerows(category_percentage_list)


def main():
    books_data = read_json_file("data_files/books.json")
    category_percentage_list = set_categories_percentage(books_data)
    create_csv_categories_file(category_percentage_list)


if __name__ == "__main__":
    main()
