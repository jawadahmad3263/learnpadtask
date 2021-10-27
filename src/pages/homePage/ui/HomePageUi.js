import React from 'react';
import GetStartedUi from '../../../components/getStarted/ui/GetStartedUi';
import HeroUi from '../../../components/Hero/ui/HeroUi';
import ServicesUi from '../../../components/serviceSection/ui/ServicesUi';
import TrackRecord from '../../../components/trackRecord/container/TrackRecord';
import LearningUi from '../../../components/learningSection/ui/LearningUi';
export default function HomePageUi() {
    return (
        <div>
            <HeroUi/>
            <ServicesUi/>
            <TrackRecord/>
            <LearningUi/>
            <GetStartedUi/>
        </div>
    )
}
