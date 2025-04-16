import { Timeline } from "@/components/ui/timeline"

export function TimelineDemo() {
  const data = [
    {
      title: "DAY 1: QUIZ AND AUCTION",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            The first day focuses on team formation through a quiz and auction process.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-3">
              <div className="font-medium min-w-[120px]">6:00 pm – 6:30 pm:</div>
              <div>
                <div className="font-medium">Quiz Round</div>
                <div>• 15 MCQs to test coding knowledge. <span className="font-mono text-bold">( its super basic stuff )</span></div>
              </div>
            </div>
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-3">
              <div className="font-medium min-w-[120px]">6:30 pm – 6:45 pm:</div>
              <div>
                <div className="font-medium">Break</div>
                <div>• Time to relax and prep for the auction.</div>
              </div>
            </div>
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-3">
              <div className="font-medium min-w-[120px]">6:45 pm onwards:</div>
              <div>
                <div className="font-medium">Player Auction</div>
                <div>• Each participant gets 2 minutes to present their coding background.</div>
                <div>• Based on this, seniors bid to form teams.</div>
              </div>
            </div>
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              <div className="font-medium min-w-[120px]">~8:00 pm:</div>
              <div>
                <div className="font-medium">Auction Ends</div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "DAY 2: BAT AND BOWL ROUND",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            The second day features the first competitive rounds with teams facing off in coding challenges.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-3">
              <div className="font-medium min-w-[120px]">6:00 pm – 6:05 pm:</div>
              <div>
                <div className="font-medium">Team Pairing</div>
                <div>• One player from each of the 8 teams picks a chit.</div>
                <div>• Forms 4 match pairs.</div>
              </div>
            </div>
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-3">
              <div className="font-medium min-w-[120px]">6:10 pm – 6:15 pm:</div>
              <div>
                <div className="font-medium">Toss</div>
                <div>• Toss between teams in each pair.</div>
                <div>• Winner chooses to Bat or Bowl first.</div>
              </div>
            </div>
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-3">
              <div className="font-medium min-w-[120px]">6:15 pm – 6:55 pm:</div>
              <div>
                <div className="font-medium">First Inning</div>
                <div>• Bowling team selects 6 questions from a set of 10.</div>
                <div>• Batting team attempts them to score runs.</div>
              </div>
            </div>
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-3">
              <div className="font-medium min-w-[120px]">7:00 pm – 7:40 pm:</div>
              <div>
                <div className="font-medium">Second Inning</div>
                <div>• Teams switch roles.</div>
                <div>• Second team bowls; first team bats.</div>
                <div>• Team with higher score wins the match.</div>
                <div className="italic mt-1">
                  {"{"} 4 teams are eliminated at this stage. {"}"}
                </div>
              </div>
            </div>
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              <div className="font-medium min-w-[120px]">7:40 pm – 8:00 pm:</div>
              <div>
                <div className="font-medium">Redemption Round</div>
                <div>• Eliminated teams face off.</div>
                <div>• Each gets 15 same questions.</div>
                <div>• Time: 20 minutes.</div>
                <div>• Top 2 teams with most correct answers advance.</div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "DAY 3: WICKET AND BALL ROUND",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            The third day features the semi-finals with the remaining teams competing in a different format.
          </p>
          <div className="mb-8">
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-3">
              <div className="font-medium min-w-[120px]">6:00 pm – 6:05 pm:</div>
              <div>
                <div className="font-medium">Team Pairing</div>
                <div>• One player from each of the 6 remaining teams picks a chit.</div>
                <div>• Forms 3 match pairs.</div>
              </div>
            </div>
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-3">
              <div className="font-medium min-w-[120px]">6:05 pm – 6:10 pm:</div>
              <div>
                <div className="font-medium">Toss</div>
                <div>• Toss between each pair.</div>
                <div>• Winner chooses to Code or Bowl first.</div>
              </div>
            </div>
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-3">
              <div className="font-medium min-w-[120px]">6:10 pm – 6:15 pm:</div>
              <div>
                <div className="font-medium">Match Order</div>
                <div>• Decide the sequence of matches.</div>
              </div>
            </div>
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-3">
              <div className="font-medium min-w-[120px]">6:15 pm – 7:15 pm:</div>
              <div>
                <div className="font-medium">Matches</div>
                <div>• Three matches with two innings each.</div>
                <div>• Bowling team hits the wicket.</div>
                <div>• Coding team solves as many of 15 questions as possible.</div>
                <div>• Teams switch roles for second innings.</div>
              </div>
            </div>
            <div className="flex gap-2 items-start text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              <div className="font-medium min-w-[120px]">7:15 pm – 7:25 pm:</div>
              <div>
                <div className="font-medium">Results</div>
                <div>• 3 Winning teams are announced!</div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "COMMENTARY ROUND (7:30 pm – 8:00 pm)",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            The final round determines the champion through a unique commentary-based challenge.
          </p>
          <div className="mb-8">
            <div className="text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-3">
              <div className="font-medium mb-2">Format:</div>
              <div>• The round is divided into 6 mini sections.</div>
              <div>• 1 player from each team represents their respective teams.</div>
              <div>• Toss between captains to choose the 1st representative.</div>
              <div>• Representatives listen to audio and fix glitched code.</div>
            </div>

            <div className="text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-3">
              <div className="font-medium mb-2">Scoring System:</div>
              <div>• 30 sec - 6 runs</div>
              <div>• 60 sec - 5 runs</div>
              <div>• 90 sec - 4 runs</div>
              <div>• 120 sec - 3 runs</div>
              <div>• 150 sec - 2 runs</div>
              <div>• 180 sec - 1 run</div>
              <div>• Beyond 180 sec - 0 runs (dot ball)</div>
            </div>

            <div className="text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              <div className="font-medium mb-2">Rules:</div>
              <div>• Even runs: Same player continues to next section.</div>
              <div>• Odd runs: Team must send a different player.</div>
              <div>• A replaced player can return only after all team members have played at least once.</div>
              <div>• Teams play simultaneously; highest runs after 6 sections wins.</div>
              <div>• Tie-breaker: First to solve one additional question wins.</div>
              <div>• "Man of The Tournament": Player with fastest solution time.</div>
            </div>
          </div>
        </div>
      ),
    },
  ]
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  )
}



{/*<div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="commentary round"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://assets.aceternity.com/features-section.png"
              alt="final challenge"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>*/}