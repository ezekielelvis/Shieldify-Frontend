import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const DashboardChartComposition = dynamic(
  () => import('@/components/ui/overview/DashboardChartComposition').then(mod => mod.DashboardChartComposition),
  { ssr: false, loading: () => <div>Loading Chart Composition...</div> }
);

const DashboardDounutChart = dynamic(
  () => import('@/components/ui/overview/DashboardDounutChart').then(mod => mod.DashboardDounutChart),
  { ssr: false, loading: () => <div>Loading Donut Chart...</div> }
);

const Kpicard = dynamic(
  () => import('@/components/ui/overview/Kpicard').then(mod => mod.Kpicard),
  { ssr: false, loading: () => <div>Loading KPI Card...</div> }
);

const DashboardCategoryBarCard = dynamic(
  () => import('@/components/ui/overview/DashboardCategoryBarCard').then(mod => mod.DashboardCategoryBarCard),
  { ssr: false, loading: () => <div>Loading Category Bar Card...</div> }
);

const DashboardFilterbar = dynamic(
  () => import('@/components/ui/overview/DashboardFilterbar').then(mod => mod.DashboardFilterbar),
  { ssr: false, loading: () => <div>Loading Filter Bar...</div> }
);

const DashboardProgressBarCard = dynamic(
  () => import('@/components/ui/overview/DashboardProgressBarCard').then(mod => mod.DashboardProgressBarCard),
  { ssr: false, loading: () => <div>Loading Progress Bar Card...</div> }
);

const Radarchart = dynamic(
  () => import('@/components/ui/overview/Radarchart').then(mod => mod.Radarchart),
  { ssr: false, loading: () => <div>Loading Progress Bar Card...</div> }
);

const Radialchart = dynamic(
  () => import('@/components/ui/overview/Radialchart').then(mod => mod.Radialchart),
  { ssr: false, loading: () => <div>Loading Progress Bar Card...</div> }
);

const Linechart = dynamic(
  () => import('@/components/ui/overview/Linechart').then(mod => mod.Linechart),
  { ssr: false, loading: () => <div>Loading Progress Bar Card...</div> }
);


const Page = () => {
  return (
    <div className='my-5 px-5'>
      <Suspense fallback={<div>Loading page content...</div>}>
        <div className="mb-5">
          <Kpicard />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
         
            <DashboardDounutChart />
            <DashboardChartComposition />

        </div>

        {/* <div className='my-5'>
          <DashboardCategoryBarCard />
        </div> */}


        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
            <DashboardFilterbar />
            <DashboardProgressBarCard />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
            <Radarchart />
            <Radialchart />
            <Linechart/>
        </div>
      </Suspense>
    </div>
  );
};

export default Page;