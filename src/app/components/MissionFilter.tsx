"use client";

import React from "react";
import { useState } from "react";
import FilterItem from "./FilterItem";

export default function MissionFilter() {
  const [longBoard, setLongBoard] = useState(false);
  const [layoutOneMissions, setLayoutOneMissions] = useState(true);
  const [layoutTwoMissions, setLayoutTwoMissions] = useState(true);
  const [layoutThreeMissions, setLayoutThreeMissions] = useState(true);
  const [layoutFourMissions, setLayoutFourMissions] = useState(true);
  const [layoutFiveMissions, setLayoutFiveMissions] = useState(true);
  const [layoutSixMissions, setLayoutSixMissions] = useState(true);
  const [layoutSevenMissions, setLayoutSevenMissions] = useState(true);
  const [layoutEightMissions, setLayoutEightMissions] = useState(true);
  const [ritual, setRitual] = useState(false);

  const missions = [
    {
      name: "A",
      primary: "Take and Hold",
      missionRule: "Raise Banners",
      deployment: "Tipping Point",
      layouts: [1, 2, 4, 6, 7, 8],
    },
    {
      name: "B",
      primary: "Purge the Foe",
      missionRule: "Smoke and Mirrors",
      deployment: "Tipping Point",
      layouts: [1, 2, 4, 6, 7, 8],
    },
    {
      name: "C",
      primary: "Linchpin",
      missionRule: "Fog of War",
      deployment: "Tipping Point",
      layouts: [1, 2, 4, 6, 7, 8],
    },
    {
      name: "D",
      primary: "Scorched Earth",
      missionRule: "Swift Action",
      deployment: "Tipping Point",
      layouts: [1, 2, 4, 6, 7, 8],
    },
    {
      name: "E",
      primary: "Take and Hold",
      missionRule: "Prepared Positions",
      deployment: "Hammer and Anvil",
      layouts: [1, 7, 8],
    },
    {
      name: "F",
      primary: "Burden of Trust",
      missionRule: "Hidden Supplies",
      deployment: "Hammer and Anvil",
      layouts: [1, 7, 8],
    },
    {
      name: "G",
      primary: "The Ritual",
      missionRule: "Stalwarts",
      deployment: "Hammer and Anvil",
      layouts: [1, 7, 8],
    },
    {
      name: "H",
      primary: "Supply Drop",
      missionRule: "Smoke and Mirrors",
      deployment: "Hammer and Anvil",
      layouts: [1, 7, 8],
    },
    {
      name: "I",
      primary: "Burden of Trust",
      missionRule: "Prepared Positions",
      deployment: "Search and Destroy",
      layouts: [1, 2, 3, 4, 6],
    },
    {
      name: "J",
      primary: "Linchpin",
      missionRule: "Raise Banners",
      deployment: "Search and Destroy",
      layouts: [1, 2, 3, 4, 6],
    },
    {
      name: "K",
      primary: "Scorched Earth",
      missionRule: "Stalwarts",
      deployment: "Search and Destroy",
      layouts: [1, 2, 3, 4, 6],
    },
    {
      name: "L",
      primary: "Take and Hold",
      missionRule: "Hidden Supplies",
      deployment: "Search and Destroy",
      layouts: [1, 2, 3, 4, 6],
    },
    {
      name: "M",
      primary: "Purge the Foe",
      missionRule: "Rapid Escalation",
      deployment: "Crucible of Battle",
      layouts: [1, 2, 4, 6, 8],
    },
    {
      name: "N",
      primary: "The Ritual",
      missionRule: "Swift Action",
      deployment: "Crucible of Battle",
      layouts: [1, 2, 4, 6, 8],
    },
    {
      name: "O",
      primary: "Terraform",
      missionRule: "Stalwarts",
      deployment: "Crucible of Battle",
      layouts: [1, 2, 4, 6, 8],
    },
    {
      name: "P",
      primary: "Scorched Earth",
      missionRule: "Inspired Leadership",
      deployment: "Crucible of Battle",
      layouts: [1, 2, 4, 6, 8],
    },
    {
      name: "Q",
      primary: "Supply Drop",
      missionRule: "Rapid Escalation",
      deployment: "Sweeping Engagement",
      layouts: [3, 5],
    },
    {
      name: "R",
      primary: "Terraform",
      missionRule: "Swift Action",
      deployment: "Sweeping Engagement",
      layouts: [3, 5],
    },
    {
      name: "S",
      primary: "Linchpin",
      missionRule: "Raise Banners",
      deployment: "Dawn of War",
      layouts: [5],
    },
    {
      name: "T",
      primary: "Unexploded Ordnance",
      missionRule: "Inspired Leadership",
      deployment: "Dawn of War",
      layouts: [5],
    },
  ];

  const filteredMissions = missions.filter((mission) => {
    if (
      longBoard &&
      (mission.deployment == "Dawn of War" ||
        mission.deployment == "Sweeping Engagement")
    ) {
      return false;
    } else if (!layoutOneMissions && mission.layouts.includes(1)) {
      return false;
    } else if (!layoutTwoMissions && mission.layouts.includes(2)) {
    } else if (!layoutThreeMissions && mission.layouts.includes(3)) {
      return false;
    } else if (!layoutFourMissions && mission.layouts.includes(4)) {
      return false;
    } else if (!layoutFiveMissions && mission.layouts.includes(5)) {
      return false;
    } else if (!layoutSixMissions && mission.layouts.includes(6)) {
      return false;
    } else if (!layoutSevenMissions && mission.layouts.includes(7)) {
      return false;
    } else if (!layoutEightMissions && mission.layouts.includes(8)) {
      return false;
    } else if (!ritual && mission.primary == "The Ritual") {
      return false;
    } else {
      return mission;
    }
  });

  const missionList = filteredMissions.map((mission) => {
    return (
      <li key={mission.name}>
        Misson {mission.name}: {mission.primary} | {mission.missionRule} |{" "}
        {mission.deployment}
      </li>
    );
  });

  return (
    <div>
      <ul>
        <FilterItem
          item={longBoard}
          itemHandler={setLongBoard}
          text="Exclude Long Board Missions"
        />
        <FilterItem
          item={layoutOneMissions}
          itemHandler={setLayoutOneMissions}
          text="Layout 1 missions"
        />
        <FilterItem
          item={layoutTwoMissions}
          itemHandler={setLayoutTwoMissions}
          text="Layout 2 missions"
        />
        <FilterItem
          item={layoutThreeMissions}
          itemHandler={setLayoutThreeMissions}
          text="Layout 3 missions"
        />
        <FilterItem
          item={layoutFourMissions}
          itemHandler={setLayoutFourMissions}
          text="Layout 4 missions"
        />
        <FilterItem
          item={layoutFiveMissions}
          itemHandler={setLayoutFiveMissions}
          text="Layout 5 missions"
        />
        <FilterItem
          item={layoutSixMissions}
          itemHandler={setLayoutSixMissions}
          text="Layout 6 missions"
        />
        <FilterItem
          item={layoutSevenMissions}
          itemHandler={setLayoutSevenMissions}
          text="Layout 7 missions"
        />
        <FilterItem
          item={layoutEightMissions}
          itemHandler={setLayoutEightMissions}
          text="Layout 8 missions"
        />
        <FilterItem
          item={ritual}
          itemHandler={setRitual}
          text="Exclude The Ritual"
        />
      </ul>
      <ul>{missionList}</ul>
    </div>
  );
}
