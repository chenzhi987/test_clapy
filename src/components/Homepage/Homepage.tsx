import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Button_StyleFilled } from './Button_StyleFilled/Button_StyleFilled';
import { DotNavigationIcon } from './DotNavigationIcon';
import { Ellipse183Icon } from './Ellipse183Icon';
import { Ellipse184Icon } from './Ellipse184Icon';
import { FigpieIcon } from './FigpieIcon';
import { FilledIconsCheckCircleIcon } from './FilledIconsCheckCircleIcon';
import { FilledIconsCheckCircleIcon2 } from './FilledIconsCheckCircleIcon2';
import { FilledIconsCheckCircleIcon3 } from './FilledIconsCheckCircleIcon3';
import { FilledIconsCheckCircleIcon4 } from './FilledIconsCheckCircleIcon4';
import { FilledIconsCheckCircleIcon5 } from './FilledIconsCheckCircleIcon5';
import { FilledIconsCheckCircleIcon6 } from './FilledIconsCheckCircleIcon6';
import { FilledIconsCheckCircleIcon7 } from './FilledIconsCheckCircleIcon7';
import { FilledIconsCheckCircleIcon8 } from './FilledIconsCheckCircleIcon8';
import { FilledIconsCheckCircleIcon9 } from './FilledIconsCheckCircleIcon9';
import { FilledIconsCheckCircleIcon10 } from './FilledIconsCheckCircleIcon10';
import { FilledIconsCheckCircleIcon11 } from './FilledIconsCheckCircleIcon11';
import { FilledIconsCheckCircleIcon12 } from './FilledIconsCheckCircleIcon12';
import { Frame85Icon } from './Frame85Icon';
import { Group39471Icon } from './Group39471Icon';
import { Group39472Icon } from './Group39472Icon';
import { Group39473Icon } from './Group39473Icon';
import { Group39474Icon } from './Group39474Icon';
import classes from './Homepage.module.css';
import { LogosContainerIcon } from './LogosContainerIcon';
import { PointIcon } from './PointIcon';
import { PointIcon2 } from './PointIcon2';
import { PointIcon3 } from './PointIcon3';
import { PointIcon4 } from './PointIcon4';
import { PointIcon5 } from './PointIcon5';
import { PointIcon6 } from './PointIcon6';
import { SocialMediaIconSquareFacebookI } from './SocialMediaIconSquareFacebookI';
import { SocialMediaIconSquareInstagram } from './SocialMediaIconSquareInstagram';
import { SocialMediaIconSquareLinkedinI } from './SocialMediaIconSquareLinkedinI';
import { SocialMediaIconSquareTwitterIc } from './SocialMediaIconSquareTwitterIc';
import { SocialMediaIconSquareYoutubeIc } from './SocialMediaIconSquareYoutubeIc';
import { UnionIcon } from './UnionIcon';
import { UnionIcon2 } from './UnionIcon2';
import { UnionIcon3 } from './UnionIcon3';
import { UnionIcon4 } from './UnionIcon4';
import { UnionIcon5 } from './UnionIcon5';
import { UnionIcon6 } from './UnionIcon6';
import { UnionIcon7 } from './UnionIcon7';
import { Vector1Icon } from './Vector1Icon';
import { Vector2Icon } from './Vector2Icon';
import { Vector3Icon } from './Vector3Icon';
import { Vector4Icon } from './Vector4Icon';
import { Vector5Icon } from './Vector5Icon';
import { VuesaxBoldGallery } from './VuesaxBoldGallery/VuesaxBoldGallery';
import { VuesaxBoldGalleryIcon } from './VuesaxBoldGalleryIcon';
import { VuesaxBoldGalleryIcon2 } from './VuesaxBoldGalleryIcon2';
import { VuesaxBoldGalleryIcon3 } from './VuesaxBoldGalleryIcon3';

interface Props {
  className?: string;
}
/* @figmaId 165:542 */
export const Homepage: FC<Props> = memo(function Homepage(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.header}>
        <div className={classes.frame86}>
          <div className={classes.frame85}>
            <Frame85Icon className={classes.icon4} />
          </div>
          <div className={classes.dineVerse}>DineVerse</div>
        </div>
        <div className={classes.autoLayoutHorizontal}>
          <div className={classes.home}>Home</div>
          <div className={classes.nFTMarketplace}>NFT Marketplace</div>
          <div className={classes.team}>Team</div>
          <div className={classes.whitepaper}>Whitepaper</div>
          <div className={classes.news}>News</div>
          <Button_StyleFilled
            className={classes.styleFilled}
            text={{
              doSomething: <div className={classes.doSomething}>Connect Wallet</div>,
            }}
          />
        </div>
      </div>
      <div className={classes.slogan}>
        <div className={classes.slogan2}>
          <div className={classes.nEXTSTEPNTHEWORLDSFIRSTEATTOEA}>
            <div className={classes.textBlock}>NEXT STEPN</div>
            <div className={classes.textBlock2}>THE WORLD’S FIRST EAT-TO-EARN ECOSYSTEM</div>
          </div>
          <div className={classes.discoverTheFutureOfDiningWithD}>Discover the Future of Dining with DineVerse</div>
        </div>
      </div>
      <div className={classes.initialMembership}>
        <div className={classes.heading}>Initial Membership</div>
        <div className={classes.autoLayoutHorizontal2}>
          <div className={classes.autoLayoutVertical}>
            <VuesaxBoldGallery
              swap={{
                vuesaxBoldGallery: <VuesaxBoldGalleryIcon className={classes.icon} />,
              }}
            />
            <div className={classes.accessToExclusiveNFTs}>
              <div className={classes.textBlock3}>Access to exclusive NFTs</div>
              <div className={classes.textBlock4}>
                <p></p>
              </div>
            </div>
          </div>
          <div className={classes.autoLayoutVertical2}>
            <VuesaxBoldGallery
              swap={{
                vuesaxBoldGallery: <VuesaxBoldGalleryIcon2 className={classes.icon2} />,
              }}
            />
            <div className={classes.enhancedRewardsAndDividends}>
              <div className={classes.textBlock5}>Enhanced rewards and dividends</div>
              <div className={classes.textBlock6}>
                <p></p>
              </div>
            </div>
          </div>
          <div className={classes.autoLayoutVertical3}>
            <VuesaxBoldGallery
              swap={{
                vuesaxBoldGallery: <VuesaxBoldGalleryIcon3 className={classes.icon3} />,
              }}
            />
            <div className={classes.priorityAccessToEventsAndPromo}>
              <div className={classes.textBlock7}>Priority access to events and promotions</div>
              <div className={classes.textBlock8}>
                <p></p>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.frame30}>
          <div className={classes.frame26}>
            <div className={classes.frame24}>
              <div className={classes.frame23}>
                <div className={classes.planType}>level 1</div>
                <div className={classes.planType2}>R</div>
              </div>
              <div className={classes.price}>0.1 ETH</div>
              <div className={classes.frame22}>
                <div className={classes.listItem}>
                  <div className={classes.frame21}>
                    <div className={classes.filledIconsCheckCircle}>
                      <FilledIconsCheckCircleIcon className={classes.icon5} />
                    </div>
                    <div className={classes.feature}>
                      Basic level with access to a variety of noteworthy and enjoyable dishes and experiences
                    </div>
                  </div>
                </div>
                <div className={classes.listItem2}>
                  <div className={classes.frame212}>
                    <div className={classes.filledIconsCheckCircle2}>
                      <FilledIconsCheckCircleIcon2 className={classes.icon6} />
                    </div>
                    <div className={classes.feature2}>Entry to general events and promotions</div>
                  </div>
                </div>
                <div className={classes.listItem3}>
                  <div className={classes.frame213}>
                    <div className={classes.filledIconsCheckCircle3}>
                      <FilledIconsCheckCircleIcon3 className={classes.icon7} />
                    </div>
                    <div className={classes.feature3}>Regular restaurant coupon airdrops</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.frame25}>
              <div className={classes.joinNow}>Join Now</div>
            </div>
          </div>
          <div className={classes.frame27}>
            <div className={classes.frame252}>
              <div className={classes.popular}>Popular</div>
            </div>
            <div className={classes.frame242}>
              <div className={classes.frame232}>
                <div className={classes.planType3}>level 2</div>
                <div className={classes.planType4}>S</div>
              </div>
              <div className={classes.price2}>0.1 ETH</div>
              <div className={classes.frame222}>
                <div className={classes.listItem4}>
                  <div className={classes.frame214}>
                    <div className={classes.filledIconsCheckCircle4}>
                      <FilledIconsCheckCircleIcon4 className={classes.icon8} />
                    </div>
                    <div className={classes.feature4}>Access to unique and sought-after culinary experiences</div>
                  </div>
                </div>
                <div className={classes.listItem5}>
                  <div className={classes.frame215}>
                    <div className={classes.filledIconsCheckCircle5}>
                      <FilledIconsCheckCircleIcon5 className={classes.icon9} />
                    </div>
                    <div className={classes.feature5}>Priority access to exclusive events and promotions</div>
                  </div>
                </div>
                <div className={classes.listItem6}>
                  <div className={classes.frame216}>
                    <div className={classes.filledIconsCheckCircle6}>
                      <FilledIconsCheckCircleIcon6 className={classes.icon10} />
                    </div>
                    <div className={classes.feature6}>More frequent restaurant coupon airdrops</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.frame253}>
              <div className={classes.joinNow2}>Join Now</div>
            </div>
          </div>
          <div className={classes.frame28}>
            <div className={classes.frame243}>
              <div className={classes.frame233}>
                <div className={classes.planType5}>level 3</div>
                <div className={classes.planType6}>SR</div>
              </div>
              <div className={classes.price3}>0.6 ETH</div>
              <div className={classes.frame223}>
                <div className={classes.listItem7}>
                  <div className={classes.frame217}>
                    <div className={classes.filledIconsCheckCircle7}>
                      <FilledIconsCheckCircleIcon7 className={classes.icon11} />
                    </div>
                    <div className={classes.feature7}>
                      Access to truly exceptional dining moments and one-of-a-kind dishes
                    </div>
                  </div>
                </div>
                <div className={classes.listItem8}>
                  <div className={classes.frame218}>
                    <div className={classes.filledIconsCheckCircle8}>
                      <FilledIconsCheckCircleIcon8 className={classes.icon12} />
                    </div>
                    <div className={classes.feature8}>Priority access to limited-edition events and collaborations</div>
                  </div>
                </div>
                <div className={classes.listItem9}>
                  <div className={classes.frame219}>
                    <div className={classes.filledIconsCheckCircle9}>
                      <FilledIconsCheckCircleIcon9 className={classes.icon13} />
                    </div>
                    <div className={classes.feature9}>Even more frequent restaurant coupon airdrops</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.frame254}>
              <div className={classes.joinNow3}>Join Now</div>
            </div>
          </div>
          <div className={classes.frame29}>
            <div className={classes.frame244}>
              <div className={classes.frame234}>
                <div className={classes.planType7}>level 4</div>
                <div className={classes.planType8}>SSR</div>
              </div>
              <div className={classes.price4}>1.0 ETH</div>
              <div className={classes.frame224}>
                <div className={classes.listItem10}>
                  <div className={classes.frame2110}>
                    <div className={classes.filledIconsCheckCircle10}>
                      <FilledIconsCheckCircleIcon10 className={classes.icon14} />
                    </div>
                    <div className={classes.feature10}>
                      Access to the most exclusive and extraordinary culinary experiences
                    </div>
                  </div>
                </div>
                <div className={classes.listItem11}>
                  <div className={classes.frame2111}>
                    <div className={classes.filledIconsCheckCircle11}>
                      <FilledIconsCheckCircleIcon11 className={classes.icon15} />
                    </div>
                    <div className={classes.feature11}>
                      Top-tier priority access to all events, promotions, and collaborations
                    </div>
                  </div>
                </div>
                <div className={classes.listItem12}>
                  <div className={classes.frame2112}>
                    <div className={classes.filledIconsCheckCircle12}>
                      <FilledIconsCheckCircleIcon12 className={classes.icon16} />
                    </div>
                    <div className={classes.feature12}>Highest frequency of restaurant coupon airdrops</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.frame255}>
              <div className={classes.joinNow4}>Join Now</div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.presaleExplanation}>
        <div className={classes.title}>
          <div className={classes.textBlock9}>Presale </div>
          <div className={classes.textBlock10}>Explanation</div>
        </div>
        <div className={classes.frame36}>
          <div className={classes.frame34}>
            <div className={classes.card}>
              <div className={classes.container}></div>
              <div className={classes.frame33}>
                <div className={classes.group39473}>
                  <Group39473Icon className={classes.icon17} />
                </div>
                <div className={classes.frame32}>
                  <div className={classes.title2}>Presale Period</div>
                  <div className={classes.frame31}>
                    <div className={classes.bigNumber}>2</div>
                    <div className={classes.bigNumber2}>Weeks</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.card2}>
              <div className={classes.container2}></div>
              <div className={classes.frame332}>
                <div className={classes.group39471}>
                  <Group39471Icon className={classes.icon18} />
                </div>
                <div className={classes.frame322}>
                  <div className={classes.title3}>Liquidity Pool</div>
                  <div className={classes.frame312}>
                    <div className={classes.bigNumber3}>40</div>
                    <div className={classes.bigNumber4}>%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.frame35}>
            <div className={classes.card3}>
              <div className={classes.container3}></div>
              <div className={classes.frame333}>
                <div className={classes.group39472}>
                  <Group39472Icon className={classes.icon19} />
                </div>
                <div className={classes.frame323}>
                  <div className={classes.title4}>Presale Goals</div>
                  <div className={classes.frame313}>
                    <div className={classes.bigNumber5}>1</div>
                    <div className={classes.bigNumber6}>M+</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.card4}>
              <div className={classes.container4}></div>
              <div className={classes.frame334}>
                <div className={classes.group39474}>
                  <Group39474Icon className={classes.icon20} />
                </div>
                <div className={classes.frame324}>
                  <div className={classes.title5}>Bonus Rewards</div>
                  <div className={classes.frame314}>
                    <div className={classes.bigNumber7}>Airdropped</div>
                    <div className={classes.bigNumber8}>Tokens</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.tokenomics}>
        <div className={classes.heading2}>Tokenomics</div>
        <div className={classes.frame45}>
          <div className={classes.frame44}>
            <div className={classes.frame84}>
              <div className={classes.directReferrers}>
                <div className={classes.textBlock11}>Direct </div>
                <div className={classes.textBlock12}>Referrers</div>
              </div>
              <div className={classes.eatAndEarn}>Eat and Earn</div>
              <div className={classes.teamRewards}>
                <div className={classes.textBlock13}>Team</div>
                <div className={classes.textBlock14}>Rewards</div>
              </div>
              <div className={classes.membershipLevelsNFTPurchases}>
                <div className={classes.textBlock15}>Membership Levels/</div>
                <div className={classes.textBlock16}>NFT purchases</div>
              </div>
              <div className={classes.liquidityPool}>
                <div className={classes.textBlock17}>Liquidity</div>
                <div className={classes.textBlock18}>Pool</div>
              </div>
              <div className={classes.ellipse183}>
                <Ellipse183Icon className={classes.icon21} />
              </div>
              <div className={classes.vector1}>
                <Vector1Icon className={classes.icon22} />
              </div>
              <div className={classes.vector2}>
                <Vector2Icon className={classes.icon23} />
              </div>
              <div className={classes.vector4}>
                <Vector4Icon className={classes.icon24} />
              </div>
              <div className={classes.vector5}>
                <Vector5Icon className={classes.icon25} />
              </div>
              <div className={classes.vector3}>
                <Vector3Icon className={classes.icon26} />
              </div>
              <div className={classes.figpie}>
                <FigpieIcon className={classes.icon27} />
              </div>
              <div className={classes.ellipse184}>
                <Ellipse184Icon className={classes.icon28} />
              </div>
            </div>
            <div className={classes.frame442}>
              <div className={classes.frame38}>
                <div className={classes.frame11}>
                  <div className={classes.liquidityPool2}>Liquidity Pool</div>
                  <div className={classes._40}>40%</div>
                </div>
                <div className={classes.group39464}>
                  <div className={classes.rectangle23802}></div>
                  <div className={classes.rectangle23803}></div>
                </div>
              </div>
              <div className={classes.frame39}>
                <div className={classes.frame112}>
                  <div className={classes.membershipLevelsNFTPurchases2}>Membership Levels/NFT purchases</div>
                  <div className={classes._20}>20%</div>
                </div>
                <div className={classes.group394642}>
                  <div className={classes.rectangle238022}></div>
                  <div className={classes.rectangle238032}></div>
                </div>
              </div>
              <div className={classes.frame40}>
                <div className={classes.frame113}>
                  <div className={classes.directReferrers2}>Direct Referrers</div>
                  <div className={classes._15}>15%</div>
                </div>
                <div className={classes.group394643}>
                  <div className={classes.rectangle238023}></div>
                  <div className={classes.rectangle238033}></div>
                </div>
              </div>
              <div className={classes.frame41}>
                <div className={classes.frame114}>
                  <div className={classes.eatAndEarn2}>Eat and Earn</div>
                  <div className={classes._10}>10%</div>
                </div>
                <div className={classes.group394644}>
                  <div className={classes.rectangle238024}></div>
                  <div className={classes.rectangle238034}></div>
                </div>
              </div>
              <div className={classes.frame42}>
                <div className={classes.frame115}>
                  <div className={classes.teamRewards2}>Team Rewards</div>
                  <div className={classes._152}>15%</div>
                </div>
                <div className={classes.group394645}>
                  <div className={classes.rectangle238025}></div>
                  <div className={classes.rectangle238035}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.partners}>
        <div className={classes.heading3}>Partners</div>
        <div className={classes.logosContainer}>
          <LogosContainerIcon className={classes.icon29} />
        </div>
        <div className={classes.dotNavigation}>
          <DotNavigationIcon className={classes.icon30} />
        </div>
      </div>
      <div className={classes.roadmap}>
        <div className={classes.group39465}>
          <div className={classes.frame60}>
            <div className={classes._2023May}>2023 May</div>
            <div className={classes.point}>
              <PointIcon className={classes.icon31} />
            </div>
            <div className={classes.projectLaunchAndPresale}>Project Launch and Presale</div>
          </div>
          <div className={classes.frame61}>
            <div className={classes._2023August}>2023 August</div>
            <div className={classes.point2}>
              <PointIcon2 className={classes.icon32} />
            </div>
            <div className={classes.appLaunchAndCommunityBuilding}>App Launch and Community Building</div>
          </div>
          <div className={classes.frame602}>
            <div className={classes._2023June}>2023 June</div>
            <div className={classes.point3}>
              <PointIcon3 className={classes.icon33} />
            </div>
            <div className={classes.nFTMarketplaceAndAppDevelopmen}>NFT Marketplace and App Development </div>
          </div>
          <div className={classes.frame62}>
            <div className={classes._2023September}>2023 September </div>
            <div className={classes.point4}>
              <PointIcon4 className={classes.icon34} />
            </div>
            <div className={classes.governanceAndTokenUtilityEnhan}>Governance and Token Utility Enhancement</div>
          </div>
          <div className={classes.frame603}>
            <div className={classes._2023July}>2023 July</div>
            <div className={classes.point5}>
              <PointIcon5 className={classes.icon35} />
            </div>
            <div className={classes.platformExpansionAndMarketing}>Platform Expansion and Marketing</div>
          </div>
          <div className={classes.frame63}>
            <div className={classes._2023October}>2023 October</div>
            <div className={classes.point6}>
              <PointIcon6 className={classes.icon36} />
            </div>
            <div className={classes.globalExpansionAndEcosystemOpt}>Global Expansion and Ecosystem Optimization</div>
          </div>
          <div className={classes.union}>
            <UnionIcon className={classes.icon37} />
          </div>
          <div className={classes.roadmap2}>Roadmap</div>
          <div className={classes.union2}>
            <UnionIcon2 className={classes.icon38} />
          </div>
          <div className={classes.union3}>
            <UnionIcon3 className={classes.icon39} />
          </div>
          <div className={classes.union4}>
            <UnionIcon4 className={classes.icon40} />
          </div>
          <div className={classes.union5}>
            <UnionIcon5 className={classes.icon41} />
          </div>
          <div className={classes.union6}>
            <UnionIcon6 className={classes.icon42} />
          </div>
          <div className={classes.union7}>
            <UnionIcon7 className={classes.icon43} />
          </div>
        </div>
      </div>
      <div className={classes.frame67}>
        <div className={classes.frame65}>
          <div className={classes.footerTitle}>Ready to Make Your Dining Valuable?</div>
          <div className={classes.newsletterInput}>
            <div className={classes.frame262}>
              <div className={classes.enterYourEmail}>Enter your email</div>
            </div>
            <div className={classes.frame256}>
              <div className={classes.subscribe}>Subscribe</div>
            </div>
          </div>
          <div className={classes.frame64}>
            <div className={classes.socialMediaIconSquareFacebook}>
              <SocialMediaIconSquareFacebookI className={classes.icon44} />
            </div>
            <div className={classes.socialMediaIconSquareTwitter}>
              <SocialMediaIconSquareTwitterIc className={classes.icon45} />
            </div>
            <div className={classes.socialMediaIconSquareInstagram}>
              <SocialMediaIconSquareInstagram className={classes.icon46} />
            </div>
            <div className={classes.socialMediaIconSquareLinkedIn}>
              <SocialMediaIconSquareLinkedinI className={classes.icon47} />
            </div>
            <div className={classes.socialMediaIconSquareYouTube}>
              <SocialMediaIconSquareYoutubeIc className={classes.icon48} />
            </div>
          </div>
        </div>
        <div className={classes.frame66}>
          <div className={classes.divider}></div>
          <div className={classes.copyright}>Copyright © 2023 Metasigns</div>
        </div>
      </div>
    </div>
  );
});
