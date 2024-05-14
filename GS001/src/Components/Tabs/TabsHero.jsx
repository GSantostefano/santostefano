import { Tabs, TabsContent, TabsList, TabsTrigger } from "./Tabs"

export const TabsHero = () => (
  <div className="flex mt-2 flex-col gap-6">
    <Tabs defaultValue="tab1">
      <TabsList className="grid w-full grid-cols-12" variant="line">
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
      </TabsList>
      <div className="mt-4">
        <TabsContent value="tab1">
          <p className="text-sm text-gray-500 sm:text-gray-500">
            Tab 1 content
          </p>
        </TabsContent>
        <TabsContent value="tab2">
          <p className="text-sm text-gray-500 sm:text-gray-500">
            Tab 2 content
          </p>
        </TabsContent>
        <TabsContent value="tab3">
          <p className="text-sm text-gray-500 sm:text-gray-500">
            Tab 3 content
          </p>
        </TabsContent>
      </div>
    </Tabs>
    
  </div>
);

