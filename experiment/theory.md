# Theory

The complex variables z and s are related by the equation: 

<div align="center">
z = e<sup>Ts</sup>
</div>

This means thtat a pole in the s plane can be located in the z plane through the transformation. 
Since the complex variable s had real part &sigma; and imaginary part &omega;, we have

<div align="center">
s = &sigma; +j &omega;
</div>

and

<div align="center">
z = e<sup>T(&sigma; +j &omega;)</sup> = e<sup>T &sigma;</sup>e<sup>jT &omega;</sup> = e<sup>T &sigma;</sup>e<sup>j(T &omega; + 2 &pi;k)</sup>
</div>

From this last equation we see that poles and zeros in the s plane, where frequencies differ in intefral multples of the sampling frequency 2 &pi;/T, are mapped into the same location in the z plane. This means that there are infinitely many values of s for each value of z.


Since &sigma; is negative in the left half of the s plane, the left half of the s plane corresponds to 

<div align="center">
|z| = e<sup>T &sigma;</sup> < 1
</div>

The j &omega; axis in the s plane corresponding to |z| = 1. That is, the imaginary axis in the s plane (the line &sigma; = 0) corresponding to the unit circle in the z plane, and the interior of the unit circle corresponds to the left half of the s plane.



<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>