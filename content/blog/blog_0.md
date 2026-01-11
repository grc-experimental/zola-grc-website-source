+++
title = "Blog 0 — What Is a Proof?"
description = "An informal analysis of what mathematicians mean by “proof,” prior to any formal foundation."
date = 2026-01-10
slug = "what-is-a-proof"
draft = false
+++


## 0. Scope and limits

This discussion is necessarily informal.

The concept of proof precedes any particular foundation, formal language, or proof system. Any attempt to formalize it would already presuppose a notion of proof and is therefore circular. Since the aim here is to clarify what foundations attempt to represent, not to work inside one of them, informality at this stage is unavoidable.

---

## 1. Proof is conviction

A proof is always a proof **to someone**.

At the most basic level, a proof of a statement A to a person X is that which convinces X that A is true. Conviction is the only direct epistemic contact we ever have with mathematical truth. Validity, rigor, and correctness are not experienced independently of conviction; they are inferred through it.

Mathematics does not, however, collapse into individual subjectivity. When mathematicians speak of *a proof* of a mathematical statement A, without qualification, they are not referring to persuasion of a particular person. They are referring to persuasion of **most mathematicians**.

Accordingly:

> A **proof of a statement A to a person X** is that which convinces X that A is true.
>
> A **proof of a mathematical statement A (unqualified)** is a proof of A to most mathematicians.

Statements here are not restricted to sentences of a formal language. They include whatever mathematicians take themselves to be asserting, reasoning about, or aiming to establish. Formal sentences appear later as representations of this practice, not as its starting point.

The phrase “most mathematicians” does not mean a vote over all humans. Such a democracy would be epistemically meaningless, since most humans lack the background required to assess mathematical arguments. Even within mathematics, competence is domain-specific. Conviction about a statement properly ranges over those mathematicians for whom the statement is intelligible and assessable, just as judgments about culinary claims range over cooks rather than chemists or historians.

---

## 2. Circularity, regress, and justification

The preceding principles are unavoidably circular: they define proof in terms of conviction and appeal to a community whose members are themselves identified through mathematical practice. This circularity is real—and unavoidable.

Any attempt to eliminate it immediately leads to infinite regress. To make “most mathematicians” precise would require criteria for who counts as a mathematician; those criteria would require justification; that justification would require further criteria, and so on. The chain cannot terminate without circularity.

The regress must stop, or no judgment is possible. It stops in practice with the community whose shared training, norms, and standards make sustained mathematical scrutiny possible. This stopping point is not arbitrary. It is forced by inevitability and justified by maximality: there is no larger or more competent class of judges available to a human practice.

This notion does not guarantee truth in any absolute or Platonic sense. It cannot. What it provides is the strongest notion available without circularity: convergence of conviction under sustained, expert scrutiny. No sharper, non-question-begging alternative exists.

In this sense, proof is not an abstract object floating independently of human judgment. It is stabilized conviction—subjective at its point of contact, objective only through communal robustness.

### 2.1. Formal proof in type theory

In type theory, proofs are formal objects governed by precise rules. This is not a counterexample to the present account. It is an instance of representation.

Type theory does not discover that proofs are formal objects in essence; it chooses to *represent* proofs as formal objects within a formal system. Such representations are evaluated by how well they encode and preserve the pre-formal notion of proof identified above.

This discussion concerns that notion itself, not any particular encoding of it.

---

## 3. Conclusion and forward pointer

Proof, at its core, is conviction stabilized by a mathematical community. Any account of foundations that fails to respect this invariant misdescribes mathematical practice.

Foundations arise as formal representations of this phenomenon. They do not define proof; they attempt to encode it.

The next blog asks what a foundation is, given this constraint.