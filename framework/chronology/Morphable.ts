interface Morphable<T extends Interpolatable<T> & Extrapolatable<T>> extends Interpolatable<T>, Extrapolatable<T> { }