# Chapter 3.4: When the Intern Gets It Wrong (A Troubleshooting Guide)
 
You wrote what felt like a solid prompt. The output was generic. You rephrased it and tried again. Still wrong. You tried a third time, got something marginally worse, and concluded what most professionals eventually conclude: "This tool just can't do what I need." You went back to doing it manually.
 
This is the single most common way AI adoption quietly dies — not through a dramatic failure, but through a few frustrating attempts followed by silent abandonment. The irony is that a failing prompt is almost always fixable, and the fix is rarely "try again harder." It is "diagnose which part is broken."
 
## The Capable Intern Has Not Failed — The Briefing Has
 
Return to the mental model. If you gave a real intern a task three times and got poor work three times, you would not conclude the intern is incompetent. You would suspect your instructions were unclear. The same logic applies here. A repeatedly failing output is a diagnostic signal, and there are only four things that are usually wrong.
 
## The Four-Part Diagnostic
 
When an output disappoints, identify the *type* of failure before rewriting anything.
 
| Symptom | Likely Cause | The Fix |
|---|---|---|
| Output is generic or could apply to any company | Missing **Context** | Add who the AI is, who the audience is, and why the task matters |
| Output is the wrong shape (essay when you wanted a list) | Missing **Constraint** | Specify format, length, and structure explicitly |
| Output invents facts or details | Missing **Content** | Paste the actual source material; never assume the AI knows your data |
| Output answers a slightly different question | Ambiguous **Clarity** | State the exact verb: extract, compare, summarise, not "look at" |
 
Notice that all four map directly to the 4Cs. A broken output is almost always a missing C.
 
## The Recovery Techniques
 
Beyond the diagnostic, three moves rescue most stuck situations.
 
**1. Correct, do not restart.** The instinct to delete and rewrite from scratch throws away the context the AI already holds. Instead, tell it precisely what was wrong: *"This is too long and too formal. Cut it to 150 words and make the tone direct, as if briefing a busy colleague."* You are redirecting, not rebuilding.
 
**2. Ask the AI to diagnose itself.** When you genuinely cannot see the problem, hand it back:
 
> *"That response missed what I needed. Before rewriting, ask me three clarifying questions that would help you produce a better result."*
 
The questions the AI asks will reveal exactly which piece of the briefing was missing. This single technique resolves a surprising share of stuck prompts.
 
**3. Switch tools before giving up.** If a prompt fails repeatedly on one model, the same prompt may succeed on another — Claude, ChatGPT, Gemini, and Copilot have genuinely different strengths. A document-heavy task that frustrates one tool may run cleanly on Claude's larger context window. Failure on one platform is not failure of the task.
 
## Know When to Stop
 
Sometimes the honest answer is that the task is a poor fit — a judgment call requiring accountability, a decision needing relationship context the AI cannot have, or work where the verification would take longer than doing it yourself. Recognising these cases is fluency, not defeat. The goal is to accelerate the tedious parts of your work, not to force every task through an AI that is the wrong instrument for it.
 
**Wrap-up**
A failing prompt is a briefing problem, not a technology verdict. By diagnosing which of the 4Cs is missing, correcting rather than restarting, asking the AI to surface its own blind spots, and switching tools when one underperforms, you convert the frustration that ends most people's AI journey into a quick, repeatable recovery. The professionals who succeed with AI are simply the ones who learned to read the failure instead of fearing it.
