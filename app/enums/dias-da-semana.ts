//Uma enum é uma namespace que você define. No caso, o namespace que eu defini é DiasDaSemana,
//em que você pode definir valores de constante. Valores que nunca vão mudar durante a sua aplicação,
// mas que eu posso, a qualquer momento, realizar DiasDaSemana.DOMINGO, e eu posso até jogar em uma variável esse valor.
//OBS: tomar cuidado quando declaramos constantes, porque o que o TypeScript faz, por padrão,
// é que se eu defino uma constante e não digo qual é o valor dessa constante da enum, ele vai adotar como padrão o valor zero, 1, 2, 3, 4, na ordem.
//Boa prática é eu estipular qual é o valor que eu quero para essa constante. Porque se eu mudar ela de posição,
//o valor não vai mudar porque não é o TypeScript que está atribuindo esses valores na ordem que eles aparecem aqui na definição da minha enum.

export enum DiasDaSemana {
    DOMINGO = 0,
    SEGUNDA = 1,
    TERCA = 2,
    QUARTA = 3,
    QUINTA = 4, 
    SEXTA = 5,
    SABADO = 6
}