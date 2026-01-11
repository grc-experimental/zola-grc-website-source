+++
title = "Blog 0 — What is a Proof?"
description = "An informal analysis of what mathematicians mean by “proof,” prior to any formal foundation."
date = 2026-01-10
slug = "blog0"
draft = false
+++


## 0. Scope and limits

This discussion is necessarily informal.

The concept of proof precedes any particular foundation, formal language, or proof system. Any attempt to formalize it would necessarily presuppose a notion of proof and is therefore circular. Since the aim here is to clarify what foundations attempt to represent, not to work inside one of them, informality at this stage is unavoidable.

---

## 1. Proof is conviction

A proof is always a proof **of something to someone**.

At the most basic level, a proof of a statement A to a person X is that which convinces X that A is true. Conviction is the only direct epistemic contact we ever have with mathematical truth. Validity, rigor, and correctness are not experienced independently of conviction; they are inferred through it.

Mathematics does not, however, collapse into individual subjectivity. When mathematicians speak of *a proof* of a mathematical statement A, without qualification, they are not referring to persuasion of a particular person. They are referring to persuasion of **most mathematicians**.

Accordingly, we have the following **two principles**:

> A **proof of a statement A to a person X** is that which convinces X that A is true.
>
> A **proof of a mathematical statement A (unqualified)** is a proof of A to most mathematicians.

Statements here are not restricted to sentences of a formal language. They include whatever mathematicians take themselves to be asserting, reasoning about, or aiming to establish. Formal sentences appear later as representations of this practice, not as its starting point.

The phrase “most mathematicians” does not mean a vote over all humans. Such a democracy would be epistemically meaningless, since most humans lack the background required to assess mathematical arguments. Even within mathematics, competence is domain-specific. Conviction about a statement properly ranges over those mathematicians for whom the statement is intelligible and assessable, just as judgments about culinary claims range over cooks rather than chemists or historians.

---

## 2. Regress and termination

The preceding two principles do not define every notion they employ. They do not define “conviction,” “mathematician,” or “most.” This is not an oversight. It is unavoidable.

Any attempt to define these terms would require further criteria: criteria for who counts as a mathematician, for what constitutes adequate assessment, for what degree of agreement suffices. Those criteria would themselves require justification, leading immediately to further criteria, and so on. The resulting regress has no natural endpoint.

Reasoning cannot proceed under an endless demand for justification. The regress must therefore terminate. It terminates here, by treating certain notions as primitive: conviction, mathematical practice, and the community of mathematicians as it exists in fact.

This termination is not circular. Nothing is defined in terms of itself. Rather, analysis stops where further analysis would yield no additional explanatory power. This is standard practice in mathematics and logic: definitions do not eliminate primitives; they organize them.

The stopping point is not arbitrary. It is forced by inevitability—no foundation-independent termination is available—and justified by maximality. Among human practices, mathematics is distinguished by sustained, disciplined scrutiny, and mathematicians form the largest community capable of carrying it out. There is no broader or more competent class to which judgment could be meaningfully deferred.

What results is not a guarantee of truth in any absolute or Platonic sense. It cannot be. What results is the strongest notion available without regress: convergence of conviction under sustained expert scrutiny. At this point, it is unclear how any strictly sharper alternative could terminate the regress without reintroducing it elsewhere.

In this sense, proof is not an abstract object independent of human judgment. It is conviction stabilized by a mathematical community. Nothing more, nothing less.

### 2.1. Formal proof in type theory

In type theory, proofs are formal objects governed by precise rules. This is not a counterexample to the present account. It is an instance of a representation of the concept of proof.

Type theory does not discover that proofs are formal objects in essence; it chooses to *represent* proofs as formal objects within a formal system. Such representations are evaluated by how well they encode and preserve the pre-formal notion of proof identified above.

This discussion concerns that notion itself, not any particular encoding of it.

---

## 3. Conclusion and forward pointer

Proof, at its core, is conviction stabilized by a mathematical community. Any account of foundations that fails to respect this invariant misdescribes mathematical practice.

Foundations arise as formal representations of this phenomenon. They do not define proof; they attempt to encode it.

The next blog asks what a foundation is, given this constraint.