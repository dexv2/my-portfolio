import Translation from './translation';
import { MlMilestonesGroup } from '../components/custom/roadmap/roadmap';

export type MlMilestonesItem = {
  name: string;
  status?: MilestoneStatus;
}

export enum MilestoneStatus { 
  Achieved = `achieved`,
  Planned = `planned`,
}

export const Milestones: MlMilestonesGroup[] = [
  {
    groupName: `06/2020 - 02/2021`,
    groupTitle: `Joined Bitcapp`,
    groupPosition: `as Web Developer / Team Leader`,
    groupItems: [
      { name: Translation.en.section.roadmap.bitcapp.item1, status: MilestoneStatus.Achieved },
      { name: Translation.en.section.roadmap.bitcapp.item2, status: MilestoneStatus.Achieved },
      { name: Translation.en.section.roadmap.bitcapp.item3, status: MilestoneStatus.Achieved },
      { name: Translation.en.section.roadmap.bitcapp.item4, status: MilestoneStatus.Achieved },
    ],
  },
  {
    groupName: `03/2021 - 07/2021`,
    groupTitle: `Joined Webpupies`,
    groupPosition: `as Web Developer`,
    groupItems: [
      { name: Translation.en.section.roadmap.webpupies.item1, status: MilestoneStatus.Achieved },
      { name: Translation.en.section.roadmap.webpupies.item2, status: MilestoneStatus.Achieved },
      { name: Translation.en.section.roadmap.webpupies.item3, status: MilestoneStatus.Achieved },
      { name: Translation.en.section.roadmap.webpupies.item4, status: MilestoneStatus.Achieved },
      { name: Translation.en.section.roadmap.webpupies.item5, status: MilestoneStatus.Achieved },
    ],
  },
  {
    groupName: `07/2021 - Present`,
    groupTitle: `Joined NFTPERP`,
    groupPosition: `as Full Stack Blockchain Engineer`,
    groupItems: [
      { name: Translation.en.section.roadmap.nftperp.item1, status: MilestoneStatus.Achieved },
      { name: Translation.en.section.roadmap.nftperp.item2, status: MilestoneStatus.Achieved },
      { name: Translation.en.section.roadmap.nftperp.item3, status: MilestoneStatus.Achieved },
      { name: Translation.en.section.roadmap.nftperp.item4, status: MilestoneStatus.Achieved },
      { name: Translation.en.section.roadmap.nftperp.item5, status: MilestoneStatus.Achieved },
    ],
  }
];
