# Theory

The absolute stability and relative stability of the linear time-invariant continuous time closed-loop control system are determined by the location of the closed-loop poles in the S-plane.
For example, complex closed-loop poles in the left half of the S-plane near the <span style="font-family:'Bodoni MT';font-size:18px;font-style:italic">j&omega;</span> axis will exhibits oscillatory behavior, and closed-loop poles on the negative real axis will exhibit exponential decay.<br>
Since the complex variables <span style="font-family:'Bodoni MT';font-style:italic;font-size:20px">z</span> and <span style="font-family:'Bodoni MT';font-style:italic;font-size:20px">s</span> are related by <span style="font-family:'Bodoni MT';font-style:italic;font-size:20px">z</span> = <span style="font-family:'Bodoni MT';font-style:italic;font-size:20px">e</span><sup><span style="font-family:'Bodoni MT';font-style:italic;font-size:20px">s</span><span style="font-family:'Bodoni MT';font-style:italic;font-size:20px">T</span></sup> , 
the pole and zero locations in the Z-plane are related to the pole and zero locations in the S-plane.
Therefore, the stability of the linear time-invariant discrete-time closed-loop system can be determined in terms of the locations of the poles of the closed-loop pulse transfer function.
It is noted that the dynamic behavior of the discrete-time control system depends on the sampling period <span style="font-family:'Bodoni MT';font-style:italic;font-size:20px">T</span>. In other words, a change in the sampling period <span style="font-family:'Bodoni MT';font-style:italic;font-size:20px">T</span> modifies the pole and zero locations in the Z-plane and causes the response behavior to change. <br><br>
<b>Mapping of the Left Half of the S-plane into the Z-plane</b><br>
In the design of a continuous-time control system, the locations of the poles and zeros in the S-plane are very important in predicting the dynamic behavior of the system.
Similarly, in designing discrete-time control systems, the locations of the poles and zeros in the Z-plane are very important. Figure 1 shows the stable region in the s plane and its transformation into the z plane.

<div align="center">
<img class="img-fluid"  src="./images/ST_sz.png" alt=""><br>
<b> Fig.1. Mapping the stable region of s plane into z plane </b>
</div>
<br>

When impulse sampling is incorporated into the process, the complex variables <span style="font-family:'Bodoni MT';font-style:italic;font-size:20px">z</span> and <span style="font-family:'Bodoni MT';font-style:italic;font-size:20px">s</span> are related by the equation: <br>

$$ z = e^{sT} \tag{1} $$

This means that a pole in the <span style="font-family:'Bodoni MT';font-style:italic;font-size:20px">s</span> plane can be located in the <span style="font-family:'Bodoni MT';font-style:italic;font-size:20px">z</span> plane through the transformation. 
Since the complex variable <span style="font-family:'Bodoni MT';font-style:italic;font-size:20px">s</span> had real part <span style="font-family:'Bodoni MT';font-style:italic;font-size:18px">&sigma;</span> and imaginary part <span style="font-family:'Bodoni MT';font-style:italic;font-size:18px">&omega;</span>, we have

$$ s = &sigma; + j &omega; \tag{2} $$  

and

$$ z = e^{T(&sigma; +j &omega;)} = e^{T &sigma;} e^{jT &omega;} = e^{T &sigma;} e^{j(T &omega; + 2 &pi;k)} \tag{3} $$

From this last equation we see that poles and zeros in the <span style="font-family:'Bodoni MT';font-style:italic;font-size:20px">s</span> plane, where frequencies differ in integral multiples of the sampling frequency 2 &pi;/<span style="font-family:'Bodoni MT';font-style:italic;font-size:18px">T</span>
, are mapped into the same location in the <span style="font-family:'Bodoni MT';font-style:italic;font-size:20px">z</span> plane.
This means that there are infinitely many values of <span style="font-family:'Bodoni MT';font-style:italic;font-size:20px">s</span> for each value of <span style="font-family:'Bodoni MT';font-style:italic;font-size:20px">z</span>.<br><br>
Since <span style="font-family:'Bodoni MT';font-style:italic;font-size:18px">&sigma;</span> is negative in the left half of the <span style="font-family:'Bodoni MT';font-style:italic;font-size:20px">s</span> plane, 
the left half of the <span style="font-family:'Bodoni MT';font-style:italic;font-size:20px">s</span> plane corresponds to <br>

$$ |z| = e^{T &sigma;} \lt 1 \tag{4} $$

The <span style="font-family:'Bodoni MT';font-style:italic;font-size:18px">j &omega;</span> axis in the <span style="font-family:'Bodoni MT';font-style:italic;font-size:20px">s</span> plane corresponding to |<span style="font-family:'Bodoni MT';font-style:italic;font-size:20px">z</span>| = 1. 
That is, the imaginary axis in the <span style="font-family:'Bodoni MT';font-style:italic;font-size:20px">s</span> plane (the line <span style="font-family:'Bodoni MT';font-style:italic;font-size:18px">&sigma;</span> = 0) 
corresponding to the unit circle in the <span style="font-family:'Bodoni MT';font-style:italic;font-size:20px">z</span> plane, and the interior of the unit circle corresponds to the left half of the <span style="font-family:'Bodoni MT';font-style:italic;font-size:20px">s</span> plane. <br/><br/>

The exponential mapping forms the theoretical basis for several standard methods such as impulse invariance and bilinear transformation used in the conversion of analog systems to digital.
<b>The impulse invariance method</b> directly uses this mapping to transform each pole of the analog system to the digital domain using the relation 
<span style="font-family:'Bodoni MT';font-style:italic;font-size:20px">z</span> = <span style="font-family:'Bodoni MT';font-style:italic;font-size:20px">e</span><sup><span style="font-family:'Bodoni MT';font-style:italic;font-size:20px">s</span><span style="font-family:'Bodoni MT';font-style:italic;font-size:20px">T</span></sup>.
This method preserves the time-domain impulse response of the system but may suffer from aliasing, especially when high-frequency components are present.<br/>
On the other hand, <b>the bilinear transformation</b> uses a rational approximation of the exponential mapping, given by:

$$ z = \frac{1+\frac{sT}{2}}{1-\frac{sT}{2}}  $$


<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>