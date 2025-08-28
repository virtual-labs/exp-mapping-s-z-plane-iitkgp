# Theory

The complex variables <span style="font-family:'Bodoni MT';font-style:italic;font-size:18px">z</span> and <span style="font-family:'Bodoni MT';font-style:italic;font-size:18px">s</span> are related by the equation: <br>
$$ z = e^{Ts} \tag{1} $$

This means thtat a pole in the <span style="font-family:'Bodoni MT';font-style:italic;font-size:18px">s</span> plane can be located in the <span style="font-family:'Bodoni MT';font-style:italic;font-size:18px">z</span> plane through the transformation. 
Since the complex variable <span style="font-family:'Bodoni MT';font-style:italic;font-size:18px">s</span> had real part <span style="font-family:'Bodoni MT';font-style:italic;font-size:18px">&sigma;</span> and imaginary part <span style="font-family:'Bodoni MT';font-style:italic;font-size:18px">&omega;</span>, we have
$$ s = &sigma; + j &omega; \tag{2} $$  

and

$$ z = e^{T(&sigma; +j &omega;)} = e^{T &sigma;} e^{jT &omega;} = e^{T &sigma;} e^{j(T &omega; + 2 &pi;k)} \tag{3} $$

From this last equation we see that poles and zeros in the <span style="font-family:'Bodoni MT';font-style:italic;font-size:18px">s</span> plane, where frequencies differ in integral multiples of the sampling frequency 2 &pi;/<span style="font-family:'Bodoni MT';font-style:italic;font-size:18px">T</span>
, are mapped into the same location in the <span style="font-family:'Bodoni MT';font-style:italic;font-size:18px">z</span> plane.
This means that there are infinitely many values of <span style="font-family:'Bodoni MT';font-style:italic;font-size:18px">s</span> for each value of <span style="font-family:'Bodoni MT';font-style:italic;font-size:18px">z</span>.<br><br>
Since <span style="font-family:'Bodoni MT';font-style:italic;font-size:18px">&sigma;</span> is negative in the left half of the <span style="font-family:'Bodoni MT';font-style:italic;font-size:18px">s</span> plane, 
the left half of the <span style="font-family:'Bodoni MT';font-style:italic;font-size:18px">s</span> plane corresponds to <br>

$$ |z| = e^{T &sigma;} \lt 1 \tag{4} $$

The <span style="font-family:'Bodoni MT';font-style:italic;font-size:18px">j &omega;</span> axis in the <span style="font-family:'Bodoni MT';font-style:italic;font-size:18px">s</span> plane corresponding to |<span style="font-family:'Bodoni MT';font-style:italic;font-size:18px">z</span>| = 1. 
That is, the imaginary axis in the <span style="font-family:'Bodoni MT';font-style:italic;font-size:18px">s</span> plane (the line <span style="font-family:'Bodoni MT';font-style:italic;font-size:18px">&sigma;</span> = 0) 
corresponding to the unit circle in the <span style="font-family:'Bodoni MT';font-style:italic;font-size:18px">z</span> plane, and the interior of the unit circle corresponds to the left half of the <span style="font-family:'Bodoni MT';font-style:italic;font-size:18px">s</span> plane.




<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>