class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  contains(value) {
      // Начинаем с корня.
      var current = this.root;

      while (current) {

          // Если значение value больше current, двигаемся вправо.
          if (value > current.value) {
              current = current.right;

          // Если значение value меньше current, двигаемся влево.
          } else if (value < current.value) {
              current = current.left;

          // Иначе значения равны, возвращаем true.
          } else {
              return true;
          }
      }

      // Если мы не нашли ничего, возвращаем false.
      return false;
  }

  add(value) {
    // Для начала создадим вершину.
    var node = {
        value: value,
        left: null,
        right: null
    };

    // Если не существует корневой вершины — добавим её.
    if (this.root === null) {
        this.root = node;
        return;
    }

    // Начнём обход с корня.
    var current = this.root;

    while (true) {

        // Если новая вершина больше или равна текущей, двигаемся вправо.
        if (value >= current.value) {

            // Если правая вершина не существует, установим её и закончим обход.
            if (!current.right) {
                current.right = node;
                break;
            }

            // Иначе перейдём на правую вершину и продолжим.
            current = current.right;

        // Если новая вершина меньше, двигаемся влево.
        } else if (value < current.value) {

            // Если левая вершина не существует, установим её и закончим обход.
            if (!current.left) {
                current.left = node;
                break;
            }

            // Иначе перейдём на левую вершину и продолжим.
            current = current.left;
        }
    }
  }
}

var three = new BinarySearchTree();
three.add(10);
three.add(1);
three.add(5);
three.add(10);
three.add(11);
console.log(three);
