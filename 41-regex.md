## Regex 

**Regex** ou expressões regulares, são usadas em várias linguagens de programação e são padrões usados para dar *match* em combinações de caracteres em strings. Para usarmos **regex**, o primeiro passo é definir o tipo de padrão que queremos dar *match* em uma string. Por exemplo: qual o comprimento e quais tipos de caracteres a string deve ter. Com isso definido a gente escreve a expressão regular que deve dar *match* com esse padrão.

A gente pode usar esse expressão regular para ter certeza que o valor que o usuário inseriu no input dá *match* com a expressão regular que a gente definiu.

Uma expressão regular começa e termina com **/**

~~~
regex -> /javascript/
~~~

A regex acima irá dar match onde qualquer string que contenha a palavra javascript, seja com ou sem espaçamento.



**Match em uma única palavra**

~~~
regex -> /^javascript$/
~~~

Na regex acima, o símbolo **^** indica o início da string e o símbolo **$** indica o final da string. Ou seja, a regex acima só irá dar match se a string a ser testada, for somente a palavra *javascript*, sem caractere ou espaçamento tanto no início quanto no final da palavra.

Agora imagine que queremos dar match em qualquer letra de A a Z, para isso iremos usar um *character set* que é representado por **[]**. Um *character set* é uma lista que dá match com qualquer caractere dentro dele.

~~~
regex -> /^[a-z]$/
~~~

A regex acima irá dar match com qualquer caractere de A a Z, mas em letra minúscula e somente um único caractere. Caso a gente queira verificar em letras maiúsculas usaremos:

~~~
regex -> /^[a-zA-Z]$/
~~~

Agora caso a gente queira dar match em uma palavra de 6 a 10 caracteres, logo após *character set* iremos inserir **{}** que representa um quantificador que indica a quantidade de caracteres que a gente quer dar match. Dentro desse quantificador a gente vai passar dois valores.

~~~
regex -> /^[a-zA-Z]{6,10}$/
~~~

A regex acima irá verificar uma palavra de A a Z e se comprimento dessa palavra tem entre 6 a 10 caracteres.

Agora caso a gente queira que essa palavra também tenha números, após o Z maiúsculo inserimos **0-9**

O caractere especial **.** representa um único caractere que pode ser qualquer caractere

~~~
/^.{6,10}/$/
~~~

A regex acima pode aceitar um conjunto de strings como essa por exemplo: js1234@[ 
