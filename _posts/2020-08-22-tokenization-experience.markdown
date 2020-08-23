---
layout: post
title:  "Add a Leading Space When Using 🤗 Transformer's BART/Roberta Tokenization"
date:   2020-07-12 21:10:08 +0800
categories: huggingface
---

<!-- You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.

Jekyll requires blog post files to be named according to the following format:

`YEAR-MONTH-DAY-title.MARKUP`

Where `YEAR` is a four-digit number, `MONTH` and `DAY` are both two-digit numbers, and `MARKUP` is the file extension representing the format used in the file. After that, include the necessary front matter. Take a look at the source for this post to get an idea about how it works.

Jekyll also offers powerful support for code snippets:

{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/ -->
### Conlusion 
Add a leading space whenever you do tokenization with 🤗 HuggingFace's BART/Roberta tokenization.
```python
text = "I like Singapore"
tokenizer.tokenize(" " + text)
```

### Phenonmenon 
```python
from transformers import RobertaTokenizer
text = "I like Singapore"
tokenizer = RobertaTokenizer.from_pretrained('roberta-base')
tokens = ["<s>"] + tokenizer.tokenize(text) + ["</s>"]
print(f"without leading space: {tokenizer.convert_tokens_to_ids(tokens)}")

tokens = ["<s>"] + tokenizer.tokenize(" " + text) + ["</s>"]
print(f"with leading space: {tokenizer.convert_tokens_to_ids(tokens)}")
```
Thus, you will get different results for the token `I`. One id is `100` and the other is `38`.
```
without leading space: [0, 100, 101, 2920, 2]
with leading space: [0, 38, 101, 2920, 2]
```
So, which one is "_correct_"? 

#### Old Version Transformers
If you are using the old version such as `transformers==2.10.0`. You can try
```python
tokenizer.encode_plus(text)
```
It will gives you `[0, 38, 101, 2920, 2]`. That means it will automatically add a leading space for the `text`.


#### New Version Transformers
If you are using the new version such as `transformers==3.0.2`. You can try
```python
tokenizer.encode_plus(text)
```
It will gives you `[0, 100, 101, 2920, 2]`. That means it will **not** add a leading space for the `text`.

### Experience
#### Named Entity Recognition (NER)
- If you use the NER example in HuggingFace library with Roberta, you will get about 90 F1 on CoNLL-2003.
- But after you add a leading space before tokenization, you will get 92.4

#### Other Tasks
For my other tasks, always adding a leading space will give me some improvements as Fairseq also suggest add a leading space before BPE tokenization. 

#### Related GitHub Issues

[https://github.com/huggingface/transformers/issues/1196](https://github.com/huggingface/transformers/issues/1196)
[https://github.com/pytorch/fairseq/blob/master/fairseq/models/roberta/hub_interface.py#L38-L56](https://github.com/pytorch/fairseq/blob/master/fairseq/models/roberta/hub_interface.py#L38-L56)
[https://github.com/ThilinaRajapakse/simpletransformers/issues/458](https://github.com/ThilinaRajapakse/simpletransformers/issues/458)



{% include disqus.html %}
