/** Personajes originales de Alonso Toro para el Dilema del Prisionero Iterado. */
(function () {
  // Unique blocky skins & headgear per strategy
  const VOXEL_SKINS = {
    human: { tunic: "#0ea5e9", pants: "#1e3a8a", skin: "#f5d0b5", hair: "#4a321f", hat: "headband", hatCol: "#eab308", accent: "#38bdf8", badge: "Jugador Humano" },
    axl_TitForTat: { tunic: "#2563eb", pants: "#1e293b", skin: "#f6d7bf", hair: "#3b2f2f", hat: "beanie", hatCol: "#38bdf8", accent: "#60a5fa", badge: "Nice · Recíproca" },
    axl_FirstByTidemanAndChieruzzi: { tunic: "#d97706", pants: "#334155", skin: "#f4d1b4", hair: "#475569", hat: "hardhat", hatCol: "#facc15", accent: "#fbbf24", badge: "Nice · Reconciliadora" },
    axl_FirstByNydegger: { tunic: "#475569", pants: "#1e293b", skin: "#f3cfb3", hair: "#94a3b8", hat: "beard", hatCol: "#cbd5e1", accent: "#94a3b8", badge: "Nice · Memoria-3" },
    axl_FirstByGrofman: { tunic: "#7c3aed", pants: "#312e81", skin: "#f7d9c2", hair: "#27272a", hat: "beret", hatCol: "#9333ea", accent: "#c084fc", badge: "Nice · Tolerante" },
    axl_FirstByShubik: { tunic: "#059669", pants: "#064e3b", skin: "#f5d2b8", hair: "#1f2937", hat: "party", hatCol: "#10b981", accent: "#34d399", badge: "Nice · Escalonada" },
    axl_FirstBySteinAndRapoport: { tunic: "#334155", pants: "#0f172a", skin: "#f5d0b5", hair: "#1e293b", hat: "bowler", hatCol: "#1e293b", accent: "#64748b", badge: "Nice · Estadística" },
    axl_Grudger: { tunic: "#1f2937", pants: "#111827", skin: "#f2cbb0", hair: "#111827", hat: "hood", hatCol: "#374151", accent: "#ef4444", badge: "Nice · Rencorosa" },
    axl_FirstByDavis: { tunic: "#4d7c0f", pants: "#365314", skin: "#f3ceb2", hair: "#5c3d28", hat: "cowboy", hatCol: "#92400e", accent: "#a16207", badge: "Nice · Paciente" },
    axl_FirstByGraaskamp: { tunic: "#b45309", pants: "#451a03", skin: "#f5d2b8", hair: "#78350f", hat: "detective", hatCol: "#a16207", accent: "#d97706", badge: "Nasty · Sondeadora" },
    axl_FirstByDowning: { tunic: "#3f3f46", pants: "#18181b", skin: "#f2ccb2", hair: "#27272a", hat: "fedora", hatCol: "#27272a", accent: "#71717a", badge: "Nasty · Pesimista" },
    axl_FirstByFeld: { tunic: "#dc2626", pants: "#1e293b", skin: "#f6d7bf", hair: "#3f2c1e", hat: "cap", hatCol: "#ef4444", accent: "#fca5a5", badge: "Nasty · Decreciente" },
    axl_FirstByJoss: { tunic: "#ca8a04", pants: "#422006", skin: "#f5d3ba", hair: "#52525b", hat: "glasses", hatCol: "#38bdf8", accent: "#facc15", badge: "Nasty · Sigilosa 10%" },
    axl_FirstByTullock: { tunic: "#1d4ed8", pants: "#172554", skin: "#f3cfb4", hair: "#1e3a8a", hat: "tallhat", hatCol: "#1e3a8a", accent: "#60a5fa", badge: "Nasty · Recortadora" },
    axl_FirstByAnonymous: { tunic: "#9a3412", pants: "#431407", skin: "#f5d0b5", hair: "#292524", hat: "straw", hatCol: "#eab308", accent: "#fb923c", badge: "Nasty · Variable" },
    axl_Random: { tunic: "#db2777", pants: "#4c1d95", skin: "#f7d9c2", hair: "#f59e0b", hat: "jester", hatCol: "#ec4899", accent: "#facc15", badge: "Nasty · Aleatoria" },
    axl_Defector: { tunic: "#991b1b", pants: "#450a0a", skin: "#efc7ab", hair: "#18181b", hat: "crown_red", hatCol: "#dc2626", accent: "#f87171", badge: "Nasty · Siempre D" },
    axl_Cooperator: { tunic: "#16a34a", pants: "#14532d", skin: "#f7dac4", hair: "#713f12", hat: "wreath", hatCol: "#4ade80", accent: "#86efac", badge: "Nice · Siempre C" },
    axl_Alternator: { tunic: "#0284c7", pants: "#991b1b", skin: "#f5d1b6", hair: "#334155", hat: "split", hatCol: "#22c55e", accent: "#ef4444", badge: "Cíclica · C-D-C-D" },
    rival_switch_50: { tunic: "#b91c1c", pants: "#166534", skin: "#f5d1b6", hair: "#1e293b", hat: "split", hatCol: "#16a34a", accent: "#dc2626", badge: "No Estacionaria C→D" },
    rival_3phase: { tunic: "#7e22ce", pants: "#1e293b", skin: "#f5d1b6", hair: "#4c1d95", hat: "crown_purple", hatCol: "#a855f7", accent: "#38bdf8", badge: "3 Fases C−D−C" },
    gen1_rulito: { species: "fiorino_canary", tunic: "#facc15", pants: "#ca8a04", skin: "#fde047", hair: "#a16207", hat: "fiorino", hatCol: "#fef08a", accent: "#fb923c", badge: "Gen 1 · Canario Fiorino" },
    gen2_cloud: { species: "budgie_blue", tunic: "#38bdf8", pants: "#0284c7", skin: "#ffffff", hair: "#e2e8f0", hat: "budgie_b", hatCol: "#38bdf8", accent: "#0ea5e9", badge: "Gen 2 · Periquito Blanco/Azul" },
    gen3_gary: { species: "black_dog", tunic: "#1e293b", pants: "#0f172a", skin: "#1e293b", hair: "#0f172a", hat: "dog_ears", hatCol: "#0f172a", accent: "#ffffff", badge: "Gen 3 · Perro Negro/Blanco" },
    gen4_base: { tunic: "#1565c0", pants: "#0f253c", skin: "#f5d2b8", hair: "#1e3a8a", hat: "blueprint", hatCol: "#38bdf8", accent: "#93c5fd", badge: "Gen 4 · Base CDDC" },
    gen5_rl: { species: "budgie_green", tunic: "#22c55e", pants: "#15803d", skin: "#fde047", hair: "#16a34a", hat: "budgie_g", hatCol: "#22c55e", accent: "#facc15", badge: "Gen 5 · Mitcha (Periquito Verde)" },
    gen6_jacinto: { species: "hyacinth_macaw", tunic: "#1d4ed8", pants: "#1e3a8a", skin: "#1d4ed8", hair: "#1e40af", hat: "macaw", hatCol: "#facc15", accent: "#facc15", badge: "Gen 6 · Jacinto (Guacamayo)" },
  };

  function getSkin(id, fallbackColor) {
    if (VOXEL_SKINS[id]) return VOXEL_SKINS[id];
    const col = fallbackColor || "#0284c7";
    return {
      tunic: col,
      pants: "#1e293b",
      skin: "#f5d2b8",
      hair: "#334155",
      hat: id && id.startsWith("custom_") ? "star_helm" : "beanie",
      hatCol: col,
      accent: "#38bdf8",
      badge: "Estrategia",
    };
  }

  function renderHatSVG(hat, hatCol, accent) {
    switch (hat) {
      case "headband":
        return `<rect x="26" y="18" width="28" height="6" fill="#4a321f"/><rect x="26" y="23" width="28" height="4" fill="${hatCol}"/><rect x="37" y="22" width="6" height="6" fill="#fef08a"/>`;
      case "beanie":
        return `<rect x="25" y="14" width="30" height="10" fill="${hatCol}"/><rect x="27" y="10" width="26" height="5" fill="${hatCol}"/><rect x="36" y="6" width="8" height="5" fill="${accent}"/>`;
      case "hardhat":
        return `<rect x="24" y="14" width="32" height="9" fill="${hatCol}"/><rect x="22" y="21" width="36" height="4" fill="#eab308"/><rect x="36" y="11" width="8" height="6" fill="#fef08a"/>`;
      case "beard":
        return `<rect x="26" y="18" width="28" height="4" fill="#cbd5e1"/><rect x="28" y="38" width="24" height="10" fill="${hatCol}"/><rect x="32" y="48" width="16" height="6" fill="${hatCol}"/><rect x="36" y="54" width="8" height="4" fill="#94a3b8"/>`;
      case "beret":
        return `<rect x="24" y="15" width="32" height="7" fill="${hatCol}"/><rect x="29" y="11" width="22" height="5" fill="${hatCol}"/><rect x="38" y="8" width="4" height="4" fill="${accent}"/>`;
      case "party":
        return `<polygon points="40,4 27,22 53,22" fill="${hatCol}" stroke="#0f172a" stroke-width="1.5"/><rect x="31" y="15" width="18" height="3" fill="#fef08a"/><rect x="37" y="2" width="6" height="5" fill="${accent}"/>`;
      case "bowler":
        return `<rect x="22" y="19" width="36" height="4" fill="${hatCol}"/><rect x="27" y="10" width="26" height="10" fill="${hatCol}"/><rect x="27" y="17" width="26" height="2" fill="#94a3b8"/>`;
      case "hood":
        return `<rect x="23" y="14" width="34" height="10" fill="${hatCol}"/><rect x="23" y="22" width="5" height="22" fill="${hatCol}"/><rect x="52" y="22" width="5" height="22" fill="${hatCol}"/>`;
      case "cowboy":
        return `<rect x="19" y="19" width="42" height="4" fill="${hatCol}"/><rect x="27" y="11" width="26" height="9" fill="${hatCol}"/><rect x="27" y="17" width="26" height="2" fill="#facc15"/>`;
      case "detective":
        return `<rect x="22" y="18" width="36" height="4" fill="${hatCol}"/><rect x="26" y="12" width="28" height="7" fill="${hatCol}"/><rect x="32" y="38" width="16" height="4" fill="#78350f"/>`;
      case "fedora":
        return `<rect x="21" y="18" width="38" height="4" fill="${hatCol}"/><rect x="27" y="11" width="26" height="8" fill="${hatCol}"/><rect x="27" y="16" width="26" height="2" fill="#dc2626"/>`;
      case "cap":
        return `<rect x="26" y="14" width="28" height="8" fill="${hatCol}"/><rect x="26" y="20" width="36" height="4" fill="#ffffff"/>`;
      case "glasses":
        return `<rect x="26" y="18" width="28" height="4" fill="#52525b"/><rect x="26" y="28" width="12" height="7" fill="#0f172a" stroke="#e2e8f0" stroke-width="1.5"/><rect x="42" y="28" width="12" height="7" fill="#0f172a" stroke="#e2e8f0" stroke-width="1.5"/><rect x="38" y="30" width="4" height="2" fill="#e2e8f0"/><rect x="28" y="29" width="4" height="2" fill="${hatCol}"/><rect x="44" y="29" width="4" height="2" fill="${hatCol}"/>`;
      case "tallhat":
        return `<rect x="24" y="18" width="32" height="4" fill="${hatCol}"/><rect x="27" y="5" width="26" height="14" fill="${hatCol}"/><rect x="27" y="15" width="26" height="3" fill="${accent}"/>`;
      case "straw":
        return `<polygon points="40,9 18,22 62,22" fill="${hatCol}" stroke="#92400e" stroke-width="1.5"/>`;
      case "jester":
        return `<rect x="26" y="16" width="28" height="6" fill="${hatCol}"/><rect x="18" y="10" width="10" height="8" fill="#2563eb"/><rect x="52" y="10" width="10" height="8" fill="#16a34a"/><rect x="35" y="7" width="10" height="9" fill="#eab308"/><rect x="16" y="15" width="4" height="4" fill="#facc15"/><rect x="60" y="15" width="4" height="4" fill="#facc15"/>`;
      case "crown_red":
      case "crown_purple":
        return `<rect x="26" y="15" width="28" height="7" fill="${hatCol}"/><rect x="26" y="9" width="6" height="6" fill="${hatCol}"/><rect x="37" y="7" width="6" height="8" fill="${hatCol}"/><rect x="48" y="9" width="6" height="6" fill="${hatCol}"/><rect x="38" y="17" width="4" height="4" fill="#fef08a"/>`;
      case "wreath":
        return `<rect x="25" y="17" width="30" height="6" fill="${hatCol}"/><rect x="29" y="16" width="4" height="4" fill="#fef08a"/><rect x="46" y="16" width="4" height="4" fill="#f472b6"/>`;
      case "split":
        return `<rect x="26" y="14" width="14" height="9" fill="${hatCol}"/><rect x="40" y="14" width="14" height="9" fill="${accent}"/>`;
      case "visor_red":
        return `<rect x="25" y="16" width="30" height="6" fill="${hatCol}"/><rect x="25" y="27" width="30" height="8" fill="#991b1b" opacity="0.88"/><rect x="28" y="29" width="24" height="3" fill="#fca5a5"/>`;
      case "cloud":
        return `<rect x="22" y="12" width="36" height="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2"/><rect x="28" y="7" width="24" height="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.2"/>`;
      case "blueprint":
        return `<rect x="25" y="13" width="30" height="10" fill="#1e40af"/><rect x="27" y="16" width="26" height="4" fill="${hatCol}"/><rect x="36" y="11" width="8" height="4" fill="#93c5fd"/>`;
      case "diamond_rl":
        return `<rect x="24" y="13" width="32" height="10" fill="#065f46"/><rect x="26" y="15" width="28" height="6" fill="#10b981"/><polygon points="40,6 46,14 40,21 34,14" fill="${hatCol}" stroke="#0f172a" stroke-width="1.2"/>`;
      case "star_helm":
        return `<rect x="25" y="14" width="30" height="9" fill="${hatCol}"/><polygon points="40,6 43,13 50,13 44,17 46,23 40,19 34,23 36,17 30,13 37,13" fill="#facc15"/>`;
      default:
        return `<rect x="26" y="17" width="28" height="5" fill="${hatCol}"/>`;
    }
  }

  let _diamondFilterSeq = 0;

  /**
   * Render custom blocky voxel animal characters (Fiorino Canary, Blue/White Budgie,
   * Black & White Short-Haired Dog, Green Budgie, Hyacinth Macaw) in crisp pixel/voxel blocks.
   */
  function renderAnimalVoxelAvatar(sk, opts) {
    const side = opts.side || "left";
    const move = opts.move || null;
    const mood = opts.mood || "neutral";
    const size = opts.size || 96;
    const sp = sk.species;

    // Head-only rendering (for Picker Grid, Axelrod Ring, Token Board)
    if (opts.headOnly) {
      let inner = "";
      if (sp === "fiorino_canary") {
        // Yellow Fiorino canary with fluffy crest (moño) and small orange beak
        inner = `
          <rect x="25" y="19" width="30" height="25" fill="#fde047" stroke="#0f172a" stroke-width="2"/>
          <rect x="23" y="13" width="34" height="8" fill="#fef08a" stroke="#0f172a" stroke-width="1.8"/>
          <rect x="27" y="9" width="26" height="6" fill="#ca8a04" stroke="#0f172a" stroke-width="1.5"/>
          <rect x="30" y="11" width="20" height="4" fill="#fde047"/>
          <rect x="29" y="27" width="4" height="4" fill="#0f172a"/>
          <rect x="47" y="27" width="4" height="4" fill="#0f172a"/>
          <rect x="36" y="31" width="8" height="6" fill="#fb923c" stroke="#0f172a" stroke-width="1.5"/>
          <rect x="22" y="36" width="6" height="8" fill="#fef08a" stroke="#0f172a" stroke-width="1.5"/>
          <rect x="52" y="36" width="6" height="8" fill="#fef08a" stroke="#0f172a" stroke-width="1.5"/>`;
      } else if (sp === "budgie_blue") {
        // White & sky-blue budgerigar
        inner = `
          <rect x="26" y="18" width="28" height="26" fill="#ffffff" stroke="#0f172a" stroke-width="2"/>
          <rect x="26" y="14" width="28" height="6" fill="#f8fafc" stroke="#0f172a" stroke-width="1.8"/>
          <rect x="28" y="38" width="24" height="6" fill="#38bdf8"/>
          <rect x="30" y="27" width="4" height="4" fill="#0f172a"/>
          <rect x="46" y="27" width="4" height="4" fill="#0f172a"/>
          <rect x="37" y="29" width="6" height="3" fill="#60a5fa"/>
          <rect x="37" y="32" width="6" height="5" fill="#eab308" stroke="#0f172a" stroke-width="1.3"/>
          <rect x="29" y="36" width="3" height="3" fill="#1e293b"/>
          <rect x="48" y="36" width="3" height="3" fill="#1e293b"/>`;
      } else if (sp === "black_dog") {
        // Short-haired black dog with white chest & floppy/perky ears
        inner = `
          <rect x="26" y="17" width="28" height="27" fill="#1e293b" stroke="#0f172a" stroke-width="2"/>
          <rect x="20" y="19" width="6" height="16" fill="#0f172a" stroke="#0f172a" stroke-width="1.5"/>
          <rect x="54" y="19" width="6" height="16" fill="#0f172a" stroke="#0f172a" stroke-width="1.5"/>
          <rect x="31" y="26" width="4" height="4" fill="#ffffff"/>
          <rect x="32" y="27" width="2" height="2" fill="#0f172a"/>
          <rect x="45" y="26" width="4" height="4" fill="#ffffff"/>
          <rect x="46" y="27" width="2" height="2" fill="#0f172a"/>
          <rect x="33" y="32" width="14" height="10" fill="#334155" stroke="#0f172a" stroke-width="1.5"/>
          <rect x="37" y="33" width="6" height="4" fill="#0f172a"/>
          <rect x="35" y="42" width="10" height="4" fill="#ffffff"/>`;
      } else if (sp === "budgie_green") {
        // Green & yellow budgerigar (Mitcha)
        inner = `
          <rect x="26" y="18" width="28" height="26" fill="#fde047" stroke="#0f172a" stroke-width="2"/>
          <rect x="26" y="14" width="28" height="6" fill="#fef08a" stroke="#0f172a" stroke-width="1.8"/>
          <rect x="26" y="37" width="28" height="7" fill="#22c55e"/>
          <rect x="30" y="26" width="4" height="4" fill="#0f172a"/>
          <rect x="46" y="26" width="4" height="4" fill="#0f172a"/>
          <rect x="37" y="29" width="6" height="3" fill="#38bdf8"/>
          <rect x="37" y="32" width="6" height="5" fill="#fb923c" stroke="#0f172a" stroke-width="1.3"/>
          <rect x="29" y="35" width="3" height="3" fill="#0f172a"/>
          <rect x="48" y="35" width="3" height="3" fill="#0f172a"/>`;
      } else if (sp === "hyacinth_macaw") {
        // Hyacinth macaw (Jacinto): cobalt blue + yellow eye rings + yellow base of large black beak
        inner = `
          <rect x="25" y="17" width="30" height="27" fill="#1d4ed8" stroke="#0f172a" stroke-width="2"/>
          <rect x="28" y="11" width="24" height="6" fill="#2563eb" stroke="#0f172a" stroke-width="1.5"/>
          <rect x="28" y="24" width="8" height="7" fill="#facc15"/>
          <rect x="44" y="24" width="8" height="7" fill="#facc15"/>
          <rect x="30" y="26" width="4" height="3" fill="#0f172a"/>
          <rect x="46" y="26" width="4" height="3" fill="#0f172a"/>
          <rect x="34" y="35" width="12" height="5" fill="#facc15"/>
          <rect x="35" y="31" width="10" height="9" fill="#0f172a"/>`;
      }
      return `<svg viewBox="18 6 44 42" width="${size}" height="${size}" class="voxel-head-svg" shape-rendering="crispEdges">${inner}</svg>`;
    }

    // Full-body voxel animal + C/D sign paddle
    const isLeft = side === "left";
    const signColor = move === "C" ? "#16a34a" : "#dc2626";
    const signBg = move === "C" ? "#dcfce7" : "#fee2e2";
    const signLetter = move || "?";
    const wingCol = sp === "fiorino_canary" ? "#fef08a" : sp === "budgie_blue" ? "#bae6fd" : sp === "black_dog" ? "#1e293b" : sp === "budgie_green" ? "#fde047" : "#1e40af";
    const pawCol = sp === "black_dog" ? "#ffffff" : "#fb923c";

    let armsAndSign = "";
    if (!move) {
      armsAndSign = `
        <rect x="17" y="45" width="9" height="24" fill="${wingCol}" stroke="#0f172a" stroke-width="2"/>
        <rect x="54" y="45" width="9" height="24" fill="${wingCol}" stroke="#0f172a" stroke-width="2"/>`;
    } else if (isLeft) {
      armsAndSign = `
        <rect x="17" y="45" width="9" height="24" fill="${wingCol}" stroke="#0f172a" stroke-width="2"/>
        <g class="voxel-arm-pop">
          <rect x="54" y="45" width="24" height="9" fill="${wingCol}" stroke="#0f172a" stroke-width="2"/>
          <rect x="72" y="45" width="6" height="9" fill="${pawCol}" stroke="#0f172a" stroke-width="1.5"/>
          <rect x="74" y="26" width="3" height="22" fill="#475569"/>
          <rect x="64" y="10" width="22" height="22" rx="4" fill="${signBg}" stroke="${signColor}" stroke-width="3"/>
          <text x="75" y="26" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="14" font-weight="800" fill="${signColor}">${signLetter}</text>
        </g>`;
    } else {
      armsAndSign = `
        <rect x="54" y="45" width="9" height="24" fill="${wingCol}" stroke="#0f172a" stroke-width="2"/>
        <g class="voxel-arm-pop">
          <rect x="2" y="45" width="24" height="9" fill="${wingCol}" stroke="#0f172a" stroke-width="2"/>
          <rect x="2" y="45" width="6" height="9" fill="${pawCol}" stroke="#0f172a" stroke-width="1.5"/>
          <rect x="3" y="26" width="3" height="22" fill="#475569"/>
          <rect x="-6" y="10" width="22" height="22" rx="4" fill="${signBg}" stroke="${signColor}" stroke-width="3"/>
          <text x="5" y="26" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="14" font-weight="800" fill="${signColor}">${signLetter}</text>
        </g>`;
    }

    let bodyAndHead = "";
    if (sp === "fiorino_canary") {
      // Yellow Fiorino Canary with frilled chest, fluffy wings, crest & leg rings
      bodyAndHead = `
        <rect x="29" y="73" width="5" height="20" fill="#fb923c" stroke="#0f172a" stroke-width="1.5"/>
        <rect x="46" y="73" width="5" height="20" fill="#fb923c" stroke="#0f172a" stroke-width="1.5"/>
        <rect x="28" y="83" width="7" height="4" fill="#facc15" stroke="#0f172a" stroke-width="1"/>
        <rect x="45" y="83" width="7" height="4" fill="#0f172a"/>
        <rect x="24" y="92" width="13" height="4" fill="#fb923c" stroke="#0f172a" stroke-width="1.4"/>
        <rect x="43" y="92" width="13" height="4" fill="#fb923c" stroke="#0f172a" stroke-width="1.4"/>
        <rect x="25" y="44" width="30" height="30" fill="#fde047" stroke="#0f172a" stroke-width="2"/>
        <rect x="21" y="48" width="6" height="20" fill="#fef08a" stroke="#0f172a" stroke-width="1.5"/>
        <rect x="53" y="48" width="6" height="20" fill="#fef08a" stroke="#0f172a" stroke-width="1.5"/>
        <rect x="31" y="48" width="18" height="20" fill="#fef08a"/>
        ${armsAndSign}
        <rect x="26" y="18" width="28" height="26" fill="#fde047" stroke="#0f172a" stroke-width="2"/>
        <rect x="23" y="13" width="34" height="7" fill="#fef08a" stroke="#0f172a" stroke-width="1.8"/>
        <rect x="27" y="9" width="26" height="5" fill="#ca8a04" stroke="#0f172a" stroke-width="1.4"/>
        <rect x="30" y="27" width="4" height="4" fill="#0f172a"/>
        <rect x="46" y="27" width="4" height="4" fill="#0f172a"/>
        ${mood === "mad" ? '<rect x="29" y="24" width="6" height="2" fill="#991b1b"/><rect x="45" y="24" width="6" height="2" fill="#991b1b"/>' : ""}
        <rect x="36" y="31" width="8" height="6" fill="#fb923c" stroke="#0f172a" stroke-width="1.4"/>`;
    } else if (sp === "budgie_blue") {
      // White & Sky-Blue Budgerigar
      bodyAndHead = `
        <rect x="30" y="73" width="5" height="20" fill="#94a3b8" stroke="#0f172a" stroke-width="1.5"/>
        <rect x="45" y="73" width="5" height="20" fill="#94a3b8" stroke="#0f172a" stroke-width="1.5"/>
        <rect x="26" y="92" width="12" height="4" fill="#94a3b8" stroke="#0f172a" stroke-width="1.4"/>
        <rect x="42" y="92" width="12" height="4" fill="#94a3b8" stroke="#0f172a" stroke-width="1.4"/>
        <rect x="26" y="44" width="28" height="30" fill="#38bdf8" stroke="#0f172a" stroke-width="2"/>
        <rect x="28" y="45" width="24" height="11" fill="#ffffff"/>
        <rect x="27" y="48" width="4" height="3" fill="#1e293b"/>
        <rect x="49" y="48" width="4" height="3" fill="#1e293b"/>
        ${armsAndSign}
        <rect x="26" y="18" width="28" height="26" fill="#ffffff" stroke="#0f172a" stroke-width="2"/>
        <rect x="26" y="14" width="28" height="6" fill="#f8fafc" stroke="#0f172a" stroke-width="1.6"/>
        <rect x="30" y="27" width="4" height="4" fill="#0f172a"/>
        <rect x="46" y="27" width="4" height="4" fill="#0f172a"/>
        ${mood === "mad" ? '<rect x="29" y="24" width="6" height="2" fill="#991b1b"/><rect x="45" y="24" width="6" height="2" fill="#991b1b"/>' : ""}
        <rect x="37" y="29" width="6" height="3" fill="#60a5fa"/>
        <rect x="37" y="32" width="6" height="5" fill="#eab308" stroke="#0f172a" stroke-width="1.3"/>`;
    } else if (sp === "black_dog") {
      // Short-haired Black Dog with White Chest
      bodyAndHead = `
        <rect x="17" y="64" width="10" height="6" fill="#0f172a" stroke="#0f172a" stroke-width="1.4"/>
        <rect x="27" y="72" width="12" height="24" fill="#0f172a" stroke="#0f172a" stroke-width="2"/>
        <rect x="41" y="72" width="12" height="24" fill="#0f172a" stroke="#0f172a" stroke-width="2"/>
        <rect x="27" y="90" width="12" height="6" fill="#ffffff" stroke="#0f172a" stroke-width="1.4"/>
        <rect x="41" y="90" width="12" height="6" fill="#ffffff" stroke="#0f172a" stroke-width="1.4"/>
        <rect x="26" y="44" width="28" height="29" fill="#1e293b" stroke="#0f172a" stroke-width="2"/>
        <rect x="32" y="46" width="16" height="22" fill="#ffffff"/>
        <rect x="35" y="62" width="10" height="6" fill="#e2e8f0"/>
        ${armsAndSign}
        <rect x="26" y="17" width="28" height="27" fill="#1e293b" stroke="#0f172a" stroke-width="2"/>
        <rect x="20" y="19" width="6" height="16" fill="#0f172a" stroke="#0f172a" stroke-width="1.5"/>
        <rect x="54" y="19" width="6" height="16" fill="#0f172a" stroke="#0f172a" stroke-width="1.5"/>
        <rect x="31" y="25" width="4" height="4" fill="#ffffff"/>
        <rect x="32" y="26" width="2" height="2" fill="#0f172a"/>
        <rect x="45" y="25" width="4" height="4" fill="#ffffff"/>
        <rect x="46" y="26" width="2" height="2" fill="#0f172a"/>
        ${mood === "mad" ? '<rect x="30" y="22" width="6" height="2" fill="#ef4444"/><rect x="44" y="22" width="6" height="2" fill="#ef4444"/>' : ""}
        <rect x="33" y="32" width="14" height="10" fill="#334155" stroke="#0f172a" stroke-width="1.4"/>
        <rect x="37" y="33" width="6" height="4" fill="#0f172a"/>
        ${mood === "happy" ? '<rect x="38" y="41" width="4" height="4" fill="#fb7185"/>' : ""}`;
    } else if (sp === "budgie_green") {
      // Green & Yellow Budgerigar (Mitcha)
      bodyAndHead = `
        <rect x="30" y="73" width="5" height="20" fill="#fb923c" stroke="#0f172a" stroke-width="1.5"/>
        <rect x="45" y="73" width="5" height="20" fill="#fb923c" stroke="#0f172a" stroke-width="1.5"/>
        <rect x="26" y="92" width="12" height="4" fill="#fb923c" stroke="#0f172a" stroke-width="1.4"/>
        <rect x="42" y="92" width="12" height="4" fill="#fb923c" stroke="#0f172a" stroke-width="1.4"/>
        <rect x="26" y="44" width="28" height="30" fill="#22c55e" stroke="#0f172a" stroke-width="2"/>
        <rect x="28" y="45" width="24" height="7" fill="#4ade80"/>
        <rect x="27" y="48" width="4" height="3" fill="#0f172a"/>
        <rect x="49" y="48" width="4" height="3" fill="#0f172a"/>
        ${armsAndSign}
        <rect x="26" y="18" width="28" height="26" fill="#fde047" stroke="#0f172a" stroke-width="2"/>
        <rect x="26" y="14" width="28" height="6" fill="#fef08a" stroke="#0f172a" stroke-width="1.6"/>
        <rect x="30" y="26" width="4" height="4" fill="#0f172a"/>
        <rect x="46" y="26" width="4" height="4" fill="#0f172a"/>
        ${mood === "mad" ? '<rect x="29" y="23" width="6" height="2" fill="#991b1b"/><rect x="45" y="23" width="6" height="2" fill="#991b1b"/>' : ""}
        <rect x="37" y="29" width="6" height="3" fill="#38bdf8"/>
        <rect x="37" y="32" width="6" height="5" fill="#fb923c" stroke="#0f172a" stroke-width="1.3"/>`;
    } else if (sp === "hyacinth_macaw") {
      // Hyacinth Macaw (Jacinto)
      bodyAndHead = `
        <rect x="34" y="73" width="12" height="20" fill="#1e3a8a" stroke="#0f172a" stroke-width="1.5"/>
        <rect x="29" y="73" width="5" height="19" fill="#475569" stroke="#0f172a" stroke-width="1.4"/>
        <rect x="46" y="73" width="5" height="19" fill="#475569" stroke="#0f172a" stroke-width="1.4"/>
        <rect x="25" y="91" width="12" height="5" fill="#334155" stroke="#0f172a" stroke-width="1.4"/>
        <rect x="43" y="91" width="12" height="5" fill="#334155" stroke="#0f172a" stroke-width="1.4"/>
        <rect x="25" y="44" width="30" height="30" fill="#1d4ed8" stroke="#0f172a" stroke-width="2"/>
        <rect x="31" y="47" width="18" height="22" fill="#2563eb"/>
        ${armsAndSign}
        <rect x="25" y="17" width="30" height="27" fill="#1d4ed8" stroke="#0f172a" stroke-width="2"/>
        <rect x="28" y="11" width="24" height="6" fill="#2563eb" stroke="#0f172a" stroke-width="1.5"/>
        <rect x="28" y="24" width="8" height="7" fill="#facc15"/>
        <rect x="44" y="24" width="8" height="7" fill="#facc15"/>
        <rect x="30" y="26" width="4" height="3" fill="#0f172a"/>
        <rect x="46" y="26" width="4" height="3" fill="#0f172a"/>
        ${mood === "mad" ? '<rect x="29" y="21" width="6" height="2" fill="#ef4444"/><rect x="45" y="21" width="6" height="2" fill="#ef4444"/>' : ""}
        <rect x="34" y="35" width="12" height="5" fill="#facc15"/>
        <rect x="35" y="31" width="10" height="9" fill="#0f172a"/>`;
    }

    const vb = isLeft ? "4 0 92 104" : "-16 0 92 104";
    return `
      <svg viewBox="${vb}" width="${size}" height="${Math.round(size * 1.12)}" class="voxel-char-svg" shape-rendering="crispEdges">
        <ellipse cx="40" cy="99" rx="22" ry="4" fill="rgba(15,37,60,0.14)"/>
        ${bodyAndHead}
      </svg>`;
  }

  /**
   * Render a crisp Minecraft-style blocky voxel character SVG.
   * @param {string} strategyId
   * @param {object} opts { side: 'left'|'right', move: 'C'|'D'|null, mood: 'neutral'|'happy'|'mad'|'sneaky', size: number, color?: string, headOnly?: boolean }
   */
  function renderVoxelAvatar(strategyId, opts = {}) {
    const sk = getSkin(strategyId, opts.color);
    if (sk.species) {
      return renderAnimalVoxelAvatar(sk, opts);
    }
    const side = opts.side || "left";
    const move = opts.move || null;
    const mood = opts.mood || "neutral";
    const size = opts.size || 96;

    if (opts.headOnly) {
      return `
        <svg viewBox="20 4 40 44" width="${size}" height="${size}" class="voxel-head-svg" shape-rendering="crispEdges">
          <rect x="26" y="18" width="28" height="26" fill="${sk.skin}" stroke="#0f172a" stroke-width="2"/>
          <rect x="49" y="19" width="4" height="24" fill="rgba(0,0,0,0.08)"/>
          <rect x="32" y="30" width="4" height="4" fill="#0f172a"/>
          <rect x="44" y="30" width="4" height="4" fill="#0f172a"/>
          <rect x="36" y="38" width="8" height="2" fill="#64748b"/>
          ${renderHatSVG(sk.hat, sk.hatCol, sk.accent)}
        </svg>`;
    }

    // Face expression
    let face = `
      <rect x="32" y="30" width="4" height="4" fill="#0f172a"/>
      <rect x="44" y="30" width="4" height="4" fill="#0f172a"/>
      <rect x="36" y="38" width="8" height="2" fill="#64748b"/>`;
    if (mood === "happy") {
      face = `
        <rect x="31" y="30" width="5" height="3" fill="#0f172a"/>
        <rect x="44" y="30" width="5" height="3" fill="#0f172a"/>
        <rect x="35" y="37" width="10" height="3" fill="#166534"/>
        <rect x="33" y="35" width="2" height="2" fill="#166534"/>
        <rect x="45" y="35" width="2" height="2" fill="#166534"/>`;
    } else if (mood === "mad") {
      face = `
        <rect x="31" y="27" width="6" height="2" fill="#991b1b"/>
        <rect x="43" y="27" width="6" height="2" fill="#991b1b"/>
        <rect x="32" y="30" width="4" height="4" fill="#0f172a"/>
        <rect x="44" y="30" width="4" height="4" fill="#0f172a"/>
        <rect x="35" y="38" width="10" height="3" fill="#991b1b"/>`;
    } else if (mood === "sneaky") {
      face = `
        <rect x="32" y="30" width="4" height="3" fill="#0f172a"/>
        <rect x="44" y="30" width="4" height="3" fill="#0f172a"/>
        <rect x="36" y="38" width="9" height="2" fill="#0f172a"/>
        <rect x="45" y="36" width="2" height="2" fill="#0f172a"/>`;
    }

    // Arm raising C or D sign on inner side
    const isLeft = side === "left";
    const signColor = move === "C" ? "#16a34a" : "#dc2626";
    const signBg = move === "C" ? "#dcfce7" : "#fee2e2";
    const signLetter = move || "?";

    let armsAndSign = "";
    if (!move) {
      armsAndSign = `
        <rect x="17" y="45" width="9" height="26" fill="${sk.tunic}" stroke="#0f172a" stroke-width="2"/>
        <rect x="17" y="65" width="9" height="6" fill="${sk.skin}" stroke="#0f172a" stroke-width="1.5"/>
        <rect x="54" y="45" width="9" height="26" fill="${sk.tunic}" stroke="#0f172a" stroke-width="2"/>
        <rect x="54" y="65" width="9" height="6" fill="${sk.skin}" stroke="#0f172a" stroke-width="1.5"/>`;
    } else if (isLeft) {
      // Left character raises RIGHT arm (towards center) holding paddle
      armsAndSign = `
        <rect x="17" y="45" width="9" height="26" fill="${sk.tunic}" stroke="#0f172a" stroke-width="2"/>
        <rect x="17" y="65" width="9" height="6" fill="${sk.skin}" stroke="#0f172a" stroke-width="1.5"/>
        <g class="voxel-arm-pop">
          <rect x="54" y="45" width="24" height="9" fill="${sk.tunic}" stroke="#0f172a" stroke-width="2"/>
          <rect x="72" y="45" width="6" height="9" fill="${sk.skin}" stroke="#0f172a" stroke-width="1.5"/>
          <rect x="74" y="26" width="3" height="22" fill="#475569"/>
          <rect x="64" y="10" width="22" height="22" rx="4" fill="${signBg}" stroke="${signColor}" stroke-width="3"/>
          <text x="75" y="26" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="14" font-weight="800" fill="${signColor}">${signLetter}</text>
        </g>`;
    } else {
      // Right character raises LEFT arm (towards center) holding paddle
      armsAndSign = `
        <rect x="54" y="45" width="9" height="26" fill="${sk.tunic}" stroke="#0f172a" stroke-width="2"/>
        <rect x="54" y="65" width="9" height="6" fill="${sk.skin}" stroke="#0f172a" stroke-width="1.5"/>
        <g class="voxel-arm-pop">
          <rect x="2" y="45" width="24" height="9" fill="${sk.tunic}" stroke="#0f172a" stroke-width="2"/>
          <rect x="2" y="45" width="6" height="9" fill="${sk.skin}" stroke="#0f172a" stroke-width="1.5"/>
          <rect x="3" y="26" width="3" height="22" fill="#475569"/>
          <rect x="-6" y="10" width="22" height="22" rx="4" fill="${signBg}" stroke="${signColor}" stroke-width="3"/>
          <text x="5" y="26" text-anchor="middle" font-family="JetBrains Mono,monospace" font-size="14" font-weight="800" fill="${signColor}">${signLetter}</text>
        </g>`;
    }

    const vb = isLeft ? "4 0 92 104" : "-16 0 92 104";
    return `
      <svg viewBox="${vb}" width="${size}" height="${Math.round(size * 1.12)}" class="voxel-char-svg" shape-rendering="crispEdges">
        <!-- Ground shadow -->
        <ellipse cx="40" cy="99" rx="22" ry="4" fill="rgba(15,37,60,0.14)"/>
        <!-- Legs -->
        <rect x="27" y="72" width="12" height="24" fill="${sk.pants}" stroke="#0f172a" stroke-width="2"/>
        <rect x="41" y="72" width="12" height="24" fill="${sk.pants}" stroke="#0f172a" stroke-width="2"/>
        <rect x="27" y="90" width="12" height="6" fill="#0f172a"/>
        <rect x="41" y="90" width="12" height="6" fill="#0f172a"/>
        <!-- Torso -->
        <rect x="26" y="44" width="28" height="29" fill="${sk.tunic}" stroke="#0f172a" stroke-width="2"/>
        <rect x="48" y="45" width="5" height="27" fill="rgba(0,0,0,0.12)"/>
        <rect x="36" y="47" width="8" height="6" fill="${sk.accent}" opacity="0.8"/>
        <!-- Arms + Sign -->
        ${armsAndSign}
        <!-- Blocky Head -->
        <rect x="26" y="18" width="28" height="26" fill="${sk.skin}" stroke="#0f172a" stroke-width="2"/>
        <rect x="49" y="19" width="4" height="24" fill="rgba(0,0,0,0.08)"/>
        ${face}
        ${renderHatSVG(sk.hat, sk.hatCol, sk.accent)}
      </svg>`;
  }

  window.IPDPersonajes = { getSkin, renderVoxelAvatar };
})();
