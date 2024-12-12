# Theory

The complex variables z and s are related by the equation: <br>
$$ z = e^{Ts} \tag{1} $$

This means that a pole in the s plane can be located in the z plane through the transformation. 
Since the complex variable s had real part &sigma; and imaginary part &omega;, we have
$$ s = \sigma + j \omega \tag{2} $$  

and

$$ z = e^{T(\sigma +j \omega)} = e^{T \sigma} e^{jT \omega} = e^{T \sigma} e^{j(T \omega + 2 \pi k)} \tag{3} $$

From this last equation we see that poles and zeros in the s plane, where frequencies differ in intefral multiples of the sampling frequency 2 &pi;/T, are mapped into the same location in the z plane.
This means that there are infinitely many values of s for each value of z.<br><br>
Since &sigma; is negative in the left half of the s plane, the left half of the s plane corresponds to <br>

$$ |z| = e^{T \sigma} \lt 1 \tag{4} $$

The j &omega; axis in the s plane corresponding to |z| = 1. That is, the imaginary axis in the s plane (the line &sigma; = 0) corresponding to the unit circle in the z plane, and the interior of the unit circle corresponds to the left half of the s plane.




<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>