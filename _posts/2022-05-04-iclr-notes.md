---
layout: post
title: Research Notes on ICLR-2022 Conference
date: 2022-05-04 01:59:00+0800
comments: true
categories: nlp

toc:
  - name: Training Strategy
  
---

I was fortunate to find some time and virually attend some of the poster and oral sessions in [ICLR-2022](https://iclr.cc/). 
I'd like to share some the research works that I had read in the conference. Hope you may find such information helpful and get your interest to further read more papers in ICLR-2022. 
I broadly divided these papers into three categories: __training strategy__, __symbolic learning__ and __interpretability__. 
Finally, I also make a list of certain papers that I'm interested but I did not find time to attend their sessions.

## Table of Content
##### Training Strategy
* [TRANS-ENCODER: Unsupervised sentence-pair modeling through self- and mutual-distillations](#trans-encoder)
* [Weighted Training for Cross-Task Learning](#weighted-training-for-cross-task-learning)
* [Finetuned Language Models are Zero-Shot Learners](#finetuned-language-models-are-zero-shot-learners)
* [Towards Understanding the Data Dependency of Mixup-style Training](#towards-understanding-the-data-dependency-of-mixup-style-training)
* [The Rich Get Richer: Disparate Impact of Semi-Supervised Learning](#the-rich-get-richer-disparate-impact-of-semi-supervised-learning)
* [AdaAug: Learning Class- and Instance-adaptive Data Augmentation Policies](#adaaug-learning-class--and-instance-adaptive-data-augmentation-policies)

##### Symbolic Learning and Structured Prediction
* [Safe Neurosymbolic Learning with Differentiable Symbolic Execution](#safe-neurosymbolic-learning-with-differentiable-symbolic-execution)
* [Constraining Linear-chain CRFs to Regular Languages](#constraining-linear-chain-crfs-to-regular-languages)

##### Interpretability
* [Discovering Latent Concepts Learned in BERT](#discovering-latent-concepts-learned-in-bert)

## Training Strategy
#### TRANS-ENCODER
The first research work I read is "_[TRANS-ENCODER: Unsupervised sentence-pair modeling through self- and mutual-distillations](https://arxiv.org/abs/2109.13059)_" by [Fangyu Liu](http://fangyuliu.me/about.html) from University of Cambridge.


<div >
        {% include figure.html path="assets/img/iclr-2022/25-04-transencoder.png" class="img-fluid rounded z-depth-2" zoomable=true %}
</div>    

They proposed a distillation training mechanism to incorporate both `bi-encoder` and `cross-encoder` for unsupervised sentence representation learning. 
Given the different advantages of `bi-encoder` and `cross-encoder`, they perform iterative distillation between the bi-encoder and cross-encoder. Such a method is able to improvement the performance of unsuperivsed STS by at most 5 points. 

Some **insights** after talking to the authors:
1. The amount of unlabeled pairs also matters as the performance would not always increase.
2. Such a framework can be generalized to disitillation among multiple model architectures ($$\geq 2$$).
3. There is another paper by Google (called "[Model Soups](https://arxiv.org/abs/2203.05482)") mentions that averaging the parameters of models with different hyperparameters can further improve the performance. In this work, the author also mentioned to me that they try something similar and have certain improvements as well.

[\<Back to Table of Content\>](#table-of-content)


#### [Weighted Training for Cross-Task Learning](https://arxiv.org/pdf/2105.14095.pdf)
This work is by [Shuxiao Chen](https://sxc.moe/) from University of Pennsylvania.
They proposed a weighted training framework under the scenario that we have limited data in the target task but abundant data in the source tasks. 
In this poster, their example target task is name entity recognition (NER) while the source task can be part-of-speech (POS) tagging. 
<div>
        {% include figure.html path="assets/img/iclr-2022/26-04-weighted-training.png" class="img-fluid rounded z-depth-2" zoomable=true %}
</div> 

The training mechansim is pretty intuitve:
> Adaptively up-weight relevant source tasks and down-weight irrelevant source tasks.

They have a theoretical proof (`Theorem 3.1`) in their paper to show this training scheme is able to converge and the error is bounded by certain variables.
(The mathematical proof is pretty long and readers can refer to the papers if interested.) 
One of them is `task distance`, which measure how close the target task and source task are.
Of course, if the two tasks are far away from each other, the improvements would not be so significant as in the results.

[\<Back to Table of Content\>](#table-of-content)


#### [Finetuned Language Models are Zero-Shot Learners](https://arxiv.org/abs/2109.01652)
I just attended this task by [Jason Wei](https://jasonwei20.github.io/). As shown in the summary, researchers from Google show  that we can obtain better zero-shot performance by finetuning the (large) language models on other tasks with instruction tuning.
Basically, we design some instruction templates as shown in the center of the poster, and finetune the model.
In my opinion, the instructions are pretty similar to prompts in terms of implementation.
<div>
        {% include figure.html path="assets/img/iclr-2022/26-04-finetuned-are-zeroshot.png" class="img-fluid rounded z-depth-2" zoomable=true %}
</div> 

[\<Back to Table of Content\>](#table-of-content)

#### [Towards Understanding the Data Dependency of Mixup-style Training](https://arxiv.org/abs/2110.07647)
This work by Muthu investigates the vanilla mixup-style training and gives some insights on when mixup fails and succeed. 
By reading the `background` in this poster, we know that we can mix up the two labels during training for the mixup representation. 
However, there would be a problem if such a representation actually has a different label other than these two labels, which they call `inter-class collinearity`.
Interestingly, they also show that we can learn a better boundary using the mixup-style training in the visualization (with $$\alpha =1 $$).

The hyperparmeter $$\alpha$$ corresponds to the mixing density in our training data. If we have a higher alpha, that means we have a higher concentration on mixup. 
This is also the case why the last plot has sort of sharper boundary  than the plot with $$\alpha =1$$.

<div>
        {% include figure.html path="assets/img/iclr-2022/26-04-towards-understand-mixup.png" class="img-fluid rounded z-depth-2" zoomable=true %}
</div>

[\<Back to Table of Content\>](#table-of-content)

#### [The Rich Get Richer: Disparate Impact of Semi-Supervised Learning](https://arxiv.org/abs/2110.06282)
This work also shows the disparate impacts of deploying semi-supervised learning (SSL). 
"_Rich get richer and poor get poorer_" means that a model would achieve lower accuracy after SSL if the model originally gives us "low" accuracy. 
In other words, we would get higher accuracy after SSL if the original accuracy is also "high". 
They quantified the comparison by a `benifit ratio` as shown in the poster. 
They adopt a simple SSL framework and prove that the error is bounded by the disparity of the baseline, which strongly relates to the noise rate of the unlabeled data. 
<div>
        {% include figure.html path="assets/img/iclr-2022/26-04-rich-get-richer.png" class="img-fluid rounded z-depth-2" zoomable=true %}
</div>

[\<Back to Table of Content\>](#table-of-content)

#### [AdaAug: Learning Class- and Instance-adaptive Data Augmentation Policies](https://openreview.net/forum?id=rWXfFogxRJN)
This work on data augmentation is by Tsz-Him Cheung from HKUST. 
I like the key idea that they train a parameterized network on the validation dataset to learn the hyperparameters.
Specifically, in Figure 2, the network parameterized by $$h_\gamma$$ is used to predict the hyperparameters for selecting the augmentation strategies.
1. They train the model on the training data as shown in the upper architecture, but freezing the parameters of $$h_\gamma$$.
2. They train the parameters of  $$h_\gamma$$ on the validation data, but freezing the parameters of those blue modules.
In this way, they can try to select the best augmentation strategy in a trainable way. 
But of course, we might doubt that the amount of validation data could be a potential issue.
<div>
        {% include figure.html path="assets/img/iclr-2022/28-04-adaaug.png" class="img-fluid rounded z-depth-2" zoomable=true %}
</div>

[\<Back to Table of Content\>](#table-of-content)

#### [Safe Neurosymbolic Learning with Differentiable Symbolic Execution](https://arxiv.org/abs/2203.07671)
Different from symbolic reasoning in NLP,  this work is about learning the neural network within an executable program. 
To be even more specific, this is called "_symbolic transition system_" (Manna & Pnueli, 2012). 
This work is by [Chenxi Yang](https://cxyang1997.github.io/) from the University of Texas at Austin. 


<div>
        {% include figure.html path="assets/img/iclr-2022/26-04-safe-neurosymbolic.png" class="img-fluid rounded z-depth-2" zoomable=true %}
</div>

__Problem__: learn the neural network parameters embedded in a program and minimize the error ($$\min Q(\theta)$$) to fit the training dataset.

__Method__: layout the symbolic execution graph and sample the trajectory over this graph. 
The sampling process also allows us to train the whole system in differentiable way though the system has non-differentiable operations.

__Insight__: As we can see in the final results, this approach is 100% safe  on the thermostat dataset even without any training data. 
Because we can directly sample from the execution graph rather than relying on the training data.


[\<Back to Table of Content\>](#table-of-content)

#### [Constraining Linear-chain CRFs to Regular Languages](https://arxiv.org/abs/2106.07306)
I'm always interested in structured prediction, the title attracts me to have a chat with the author, Sean Papay from University of Stuttgart.
They start with a finite state automata and build the CRF graphical model according to that "language". 
To be more specific, there are certain constraints, for example:
1. The state $$q_2$$ cannot go to state $$q_4$$ with an action of `Patient`.

IMO, it is also pretty similar to a constrained CRF where we design certain constriants with our prior knowledge.
But I didn't fully read the papers, I could be misunderstanding some of the key content here.
<div>
        {% include figure.html path="assets/img/iclr-2022/28-04-constraining-linear-crf.png" class="img-fluid rounded z-depth-2" zoomable=true %}
</div>

[\<Back to Table of Content\>](#table-of-content)

#### [Discovering Latent Concepts Learned in BERT](https://openreview.net/forum?id=POTMtpYI1xH)
The last poster I read is more about findings in BERT. 
They perform clustering for the word presentations given by BERT/Roberta. 
The same words in different contexts might have different semantic meaning as well.
Similar to some previous findings, they also show the representations in the upper layers convey more semantic information while the representations 
at lower level convey syntactic information. 
They manually annotate a dataset with 174 concept labels and a total of 1 million annotated instances. 
Though they did not have any downstream experiments, the research efforts here is apprecitated and could benefit our research community.
<div>
        {% include figure.html path="assets/img/iclr-2022/27-04-discover-latent.png" class="img-fluid rounded z-depth-2" zoomable=true %}
</div>

[\<Back to Table of Content\>](#table-of-content)




