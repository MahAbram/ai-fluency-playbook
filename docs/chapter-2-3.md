# Chapter 2.3: The Verification Habit (How to Trust but Check)
 
Your Capable Intern just handed you a one-page summary of a 40-page quarterly report. It is clean, confident, and well-organised. It states that regional revenue grew 12% and that the operations director flagged three supply-chain risks. You have a board meeting in twenty minutes.
 
Do you trust it?
 
This is the moment the entire playbook has been building toward. Every chapter has repeated the same principle: delegate, but verify. Yet almost no one is ever taught *how* to verify efficiently. Reading the full 40 pages to check the summary defeats the purpose of having a summary at all. The skill is not reading everything — it is knowing exactly what to check and what to safely trust.
 
## Why AI Gets Specific Things Wrong
 
A generative AI does not "look up" facts. It predicts the most statistically likely next words based on patterns in its training. This means it is extremely reliable at structure, tone, and general reasoning — and unreliable at precise, specific details that it may simply generate to fit the pattern. Understanding *which* parts of an output are high-risk lets you verify in two minutes instead of forty.
 
Four categories are the usual suspects:
 
* **Numbers and statistics:** Percentages, dollar figures, dates, and quantities are the single most common fabrication. The AI knows a revenue figure *belongs* in that sentence, so it produces a plausible-looking one.
* **Attributed quotes:** "The director said X." The AI may merge, paraphrase, or invent attribution that was never in the source.
* **Named specifics:** Proper names, clause numbers, page references, and citations. A confidently cited "Section 4.2" may not exist.
* **Absence claims:** "The report does not mention any risks." The AI is poor at proving a negative; it may simply have missed the section.
Everything else — the overall narrative, the summary logic, the structure — is usually safe.
 
## The Plug-and-Play Verification Routine
 
Do not verify everything. Verify the high-risk claims only, using this three-step routine.
 
**1. Force citations at generation time.** The best verification starts before the output exists. Add this constraint to any extraction or summary prompt:
 
> **[Constraint]** For every figure, quote, or specific claim, cite the exact page number or paragraph it came from in the source. If you cannot locate a specific source for a claim, mark it as "[UNVERIFIED]" rather than stating it as fact.
 
This turns the AI into your verification assistant — it now tells you exactly where to look, and flags its own guesses.
 
**2. Spot-check the high-risk claims.** Take the three or four numbers, quotes, or named specifics that actually matter for your decision. Use the cited page references to check them directly against the source. You are not re-reading the document — you are jumping to four specific spots.
 
**3. Test one absence claim.** If the summary says something is *not* present and that matters, ask a direct follow-up: *"Search the source again specifically for any mention of supply-chain risk and quote it directly if found."* This catches the most dangerous error — the thing that was there and got missed.
 
## A Tool Difference Worth Knowing
 
When verification is critical, the tool matters. Claude and ChatGPT working from a document you uploaded can cite within that document. For claims about the outside world — market data, competitor moves, current events — a search-grounded tool like Perplexity, which forces live inline citations, is far safer than a standard model working from training data.
 
**Wrap-up**
Verification is not the tax you pay for using AI; it is the skill that makes delegation safe. By learning which four categories of claim are high-risk, forcing the AI to cite its own sources, and spot-checking only what matters for your decision, you turn a leap of faith into a two-minute discipline. The professionals who trust AI most are not the ones who check least — they are the ones who know exactly what to check.
