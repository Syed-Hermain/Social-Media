import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";

function Profile() {
  return (
    <>
      {/* Desktop Version */}
      <div className="hidden sm:block max-w-2xl mx-auto bg-background border-x border-black-200 min-h-screen">
        {/* Banner */}
        <div className="relative h-48 bg-muted">
          <img
            src="https://pbs.twimg.com/profile_banners/783214/1500000000/1500x500"
            alt="Banner"
            className="object-cover w-full h-full rounded-t-lg"
          />
          {/* Avatar */}
          <div className="absolute -bottom-16 left-6">
            <Avatar className="w-32 h-32 border-4 border-background shadow-lg">
              <AvatarImage src="https://randomuser.me/api/portraits/lego/1.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
          {/* Edit Profile Button */}
          <div className="absolute bottom-4 right-6">
            <Button
              variant="outline"
              className="rounded-full px-6 font-semibold"
            >
              Edit Profile
            </Button>
          </div>
        </div>
        {/* Profile Info */}
        <div className="pt-20 px-6 pb-4 bg-background">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold leading-tight text-foreground">
              Your Name
            </h1>
            <span className="text-muted-foreground">@yourusername</span>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Building cool things at{" "}
            <span className="text-primary">@AcmeCorp</span>. Coffee enthusiast.
            🚀
          </p>
          <div className="flex items-center gap-4 mt-3 text-muted-foreground text-xs">
            <span className="flex items-center gap-1">
              <span role="img" aria-label="Location">
                📍
              </span>{" "}
              New York, NY
            </span>
            <span className="flex items-center gap-1">
              <span role="img" aria-label="Joined">
                🗓️
              </span>{" "}
              Joined January 2025
            </span>
          </div>
          <div className="flex gap-6 mt-2 text-sm">
            <span>
              <span className="font-semibold text-foreground">1,234</span>{" "}
              <span className="text-muted-foreground">Following</span>
            </span>
            <span>
              <span className="font-semibold text-foreground">5,678</span>{" "}
              <span className="text-muted-foreground">Followers</span>
            </span>
          </div>
        </div>
        {/* Tabs */}
        <Tabs defaultValue="tweets" className="px-0 bg-background">
          <TabsList className="w-full flex border-b border-black-200 bg-transparent rounded-none px-6">
            <TabsTrigger
              value="tweets"
              className="flex-1 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:text-blue-600"
            >
              Tweets
            </TabsTrigger>
            <TabsTrigger
              value="replies"
              className="flex-1 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:text-blue-600"
            >
              Replies
            </TabsTrigger>
            <TabsTrigger
              value="media"
              className="flex-1 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:text-blue-600"
            >
              Media
            </TabsTrigger>
            <TabsTrigger
              value="likes"
              className="flex-1 rounded-none data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:text-blue-600"
            >
              Likes
            </TabsTrigger>
          </TabsList>
          <TabsContent value="tweets">
            <div className="divide-y">
              {[1, 2, 3].map((tweet) => (
                <Card key={tweet} className="p-4 flex gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src="https://randomuser.me/api/portraits/lego/1.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold">Your Name</span>
                      <span className="text-gray-500 text-sm">
                        @johndoe · 1h
                      </span>
                    </div>
                    <p className="mt-1 text-foreground">
                      This is a sample tweet! 🎉
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="replies">
            <div className="p-6 text-gray-500">No replies yet.</div>
          </TabsContent>
          <TabsContent value="media">
            <div className="p-6 text-gray-500">No media yet.</div>
          </TabsContent>
          <TabsContent value="likes">
            <div className="p-6 text-gray-500">No likes yet.</div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Mobile Version */}
      <div className="block sm:hidden bg-background min-h-screen">
        {/* Banner */}
        <div className="relative h-28 bg-muted">
          <img
            src="https://pbs.twimg.com/profile_banners/783214/1500000000/1500x500"
            alt="Banner"
            className="object-cover w-full h-full"
          />
          {/* Avatar */}
          <div className="absolute -bottom-10 left-4">
            <Avatar className="w-20 h-20 border-4 border-background shadow-lg">
              <AvatarImage src="https://randomuser.me/api/portraits/lego/1.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
          {/* Edit Profile Button */}
          <div className="absolute bottom-2 right-4">
            <Button
              variant="outline"
              className="rounded-full px-4 py-1 text-xs font-semibold h-8"
            >
              Edit
            </Button>
          </div>
        </div>
        {/* Profile Info */}
        <div className="pt-14 px-4 pb-2 bg-background">
          <div className="flex flex-col gap-1">
            <h1 className="text-lg font-bold leading-tight text-foreground">
              Your Name
            </h1>
            <span className="text-xs text-muted-foreground">@yourusername</span>
          </div>
          <p className="mt-1 text-xs text-muted-foreground">
            Building cool things at{" "}
            <span className="text-primary">@AcmeCorp</span>. Coffee enthusiast.
            🚀
          </p>
          <div className="flex flex-wrap items-center gap-2 mt-2 text-muted-foreground text-xs">
            <span className="flex items-center gap-1">
              <span role="img" aria-label="Location">
                📍
              </span>{" "}
              NY
            </span>
            <span className="flex items-center gap-1">
              <span role="img" aria-label="Joined">
                🗓️
              </span>{" "}
              Jan 2025
            </span>
          </div>
          <div className="flex gap-4 mt-1 text-xs">
            <span>
              <span className="font-semibold text-foreground">1,234</span>{" "}
              <span className="text-muted-foreground">Following</span>
            </span>
            <span>
              <span className="font-semibold text-foreground">5,678</span>{" "}
              <span className="text-muted-foreground">Followers</span>
            </span>
          </div>
        </div>
        {/* Tabs */}
        <Tabs defaultValue="tweets" className="px-0 bg-background">
          <TabsList className="w-full flex border-b border-black-200 bg-transparent rounded-none px-2">
            <TabsTrigger
              value="tweets"
              className="flex-1 rounded-none text-xs py-2 data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:text-blue-600"
            >
              Tweets
            </TabsTrigger>
            <TabsTrigger
              value="replies"
              className="flex-1 rounded-none text-xs py-2 data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:text-blue-600"
            >
              Replies
            </TabsTrigger>
            <TabsTrigger
              value="media"
              className="flex-1 rounded-none text-xs py-2 data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:text-blue-600"
            >
              Media
            </TabsTrigger>
            <TabsTrigger
              value="likes"
              className="flex-1 rounded-none text-xs py-2 data-[state=active]:border-b-2 data-[state=active]:border-blue-500 data-[state=active]:text-blue-600"
            >
              Likes
            </TabsTrigger>
          </TabsList>
          <TabsContent value="tweets">
            <div className="divide-y">
              {[1, 2, 3].map((tweet) => (
                <Card key={tweet} className="p-3 flex gap-3">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src="https://randomuser.me/api/portraits/lego/1.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="font-bold text-sm">Your Name</span>
                      <span className="text-gray-500 text-xs">
                        @johndoe · 1h
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-foreground">
                      This is a sample tweet! 🎉
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="replies">
            <div className="p-4 text-gray-500 text-xs">No replies yet.</div>
          </TabsContent>
          <TabsContent value="media">
            <div className="p-4 text-gray-500 text-xs">No media yet.</div>
          </TabsContent>
          <TabsContent value="likes">
            <div className="p-4 text-gray-500 text-xs">No likes yet.</div>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}

export default Profile;
