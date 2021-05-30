---
layout: post
title:  "Use PretrainedTokenizationFast is Much Faster than just PretrainedTokenization (in my case)"
date:   2021-05-28 23:43:08 +0800
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
Even single-thread tokenizer_fast is **much faster** than using tokenizer with multithread. 
This will save us a lot of time during our developing process.

The following data comes from my Mac.

| File Size | Time | Batch Size | Tokenizer | Method | 
|:-----------:|:----:|:-------:|:-------:|:-------:|
|~200+MB (10,000 sents) | 2576 ms | 100 | RobertaTokenizer     | batch_encode_plus |
|~200+MB (10,000 sents) | 512 ms  | 100 | RobertaTokenizerFast | batch_encode_plus |
|~200+MB (10,000 sents) | 7617 ms  | 100 | RobertaTokenizer + Multithread (#thread=10) | batch_encode_plus |

(My actual experiments on the Linux server have even faster speed using PretrainedTokenizerFast)

However, the current `PretrainedTokenizerFast` is not so well supported by multithreading in Python. 
I would expect it would be even much much faster with that available. 

[**Colab Code**](https://colab.research.google.com/drive/1TESTyiqEhaVNfW6PsXc6Hqm26s4RxRuo?usp=sharing) for the experiments below.

### Experiments with different Batch Size
Tokenization time (ms) with different batch size using the `batch_encode_plus` method.
All experiments below are conducted on the Mac OS.

| Batch Size | 1 | 2 | 8 | 50 |  100 | 500 | 1000 |
|:------|:----:|:-------:|:-------:|:-------:|:-------:|:-------:|:-------:|
| PretrainedTokenizer | 3062 | 3039 | 2637 | 2533 | 2576 | 2685 |2548|
| PretrainedTokenizerFast | 2476 | 1863 | 1048 | 585 | 512 | 484 |562|

As we can see, the tokenization keep decreasing with larger batch size but it remains stable when the batch size is too large.

```python3
## Testing the normal/fast tokenizer
batch_sizes = [1, 2, 8, 50, 100, 500, 1000]
for batch_size in batch_sizes:
    start = time.time()
    for i in tqdm(range(0, len(sents), batch_size), total=len(sents) // batch_size, desc="tokenization"):
        sub_sents = sents[i: i+batch_size]
        normal_tokenizer.batch_encode_plus(sub_sents)
    end = time.time()
    print(f"batch_size: {batch_size}, running time: {(end-start)*1000} ms")
##
```

### Experiments with Multithread
We didn't run many experiments using multithread as we can see in the first table. The running time is much slower than single-thread tokenizer.
This phenonmenon is also consistent with the one I observed during the experiments in the Linux server.





{% include disqus.html %}
