import Instance from "@giro3d/giro3d/core/Instance.js";
import PotreeSource from "@giro3d/giro3d/sources/PotreeSource.js";
import PotreePointCloud from "@giro3d/giro3d/entities/PotreePointCloud.js";

export default class ViewerPC {
    constructor(container: HTMLElement) {
        const source = new PotreeSource(
            "https://3d.oslandia.com/potree/pointclouds/lion_takanawa",
            "cloud.js"
        );

        const potree = new PotreePointCloud("potree", source);

        const instance = new Instance(container);

        instance.add(potree).then(() => {
            console.log("Loaded !");
        });
    }
}